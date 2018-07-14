import axios from 'axios'const state = {    token: localStorage.getItem('access_token') || null,    expiration: localStorage.getItem('expiration') || null,    user: {},    passwordResetEmail: null};const mutations = {    retrieveToken(state, { token, expiration }) {        state.token = token;        state.expiration = expiration + Date.now();    },    logout(state) {        state.token = null,            state.expiration = null,            state.user = {}    },    setUser(state, data) {        state.user = data.data    }};const actions = {    logout(context) {        if (context.getters.loggedIn) {            return new Promise((resolve, reject) => {                axios.get('/api/auth/logout')                    .then(response => {                        localStorage.removeItem('access_token');                        localStorage.removeItem('expiration');                        context.commit('logout');                        resolve(response)                    })                    .catch(error => {                        localStorage.removeItem('access_token');                        localStorage.removeItem('expiration');                        context.commit('logout');                        reject(error)                    })            })        }    },    retrieveToken(context, credentials) {        return new Promise((resolve, reject) => {            axios.post('/api/auth/login', {                client_id: "2",                client_secret: "QN8DBcZdieBJe3nfkO9hVKOJ2hNcrAvAN7iJDs5J",                grand_type: "password",                email: credentials.email,                password: credentials.password            })                .then(response => {                    console.log(response.data)                    const token = response.data.access_token                    const expiration = response.data.expires_at                    localStorage.setItem('access_token', token);                    localStorage.setItem('expiration', expiration);                    context.commit('retrieveToken', { token, expiration });                    resolve(response)                })                .catch(error => {                    reject(error)                })        })    },    onSignup(context, data) {        return new Promise((resolve, reject) => {            axios.post('/api/auth/signup', {                name: data.name,                email: data.email,                password: data.password,                password_confirmation: data.password_confirmation            })                .then(response => {                    resolve(response)                })                .catch(error => {                    reject(error)                })        })    },    getUser(context) {        return new Promise((res, rej) => {            if (context.getters.loggedIn) {                axios.get('/api/auth/user')                    .then(response => {                        context.commit('setUser', response.data)                        res(response)                    })                    .catch(err => {                        rej(err)                    })            }        })    },    activateAccount(context, data) {        return new Promise((resolve, reject) => {            axios.get('/api/auth/signup/activate/' + data)                .then(response => {                    resolve(response)                })                .catch(error => {                    reject(error)                })        })    }};const getters = {    loggedIn(state) {        return state.token !== null && state.expiration !== null    },    user(state) {        return state.user    },    token(state) {        return state.token    },    isAdmin(state) {      if (state.user.role_id || state.user.secret === 'SupeDaja'){          return true      }      return false    }};export default {    state,    mutations,    actions,    getters}