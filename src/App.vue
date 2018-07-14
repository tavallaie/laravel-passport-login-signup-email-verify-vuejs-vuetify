<!--suppress ALL -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            v-model="drawer"
            fixed
            app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
                  v-if="item.heading"
                  :key="item.heading"
                  row
                  align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
                  v-else-if="item.children"
                  v-model="item.model"
                  :key="item.text"
                  :prepend-icon="item.model ? item.icon : item['icon-alt']"
                  append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
                    v-for="(child, i) in item.children"
                    :key="i"
                    @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
          <template v-if="isLogedIn" v-for="item in userIsLogin">
              <v-layout
                      v-if="item.heading"
                      :key="item.heading"
                      row
                      align-center
              >
                  <v-flex xs6>
                      <v-subheader v-if="item.heading">
                          {{ item.heading }}
                      </v-subheader>
                  </v-flex>
                  <v-flex xs6 class="text-xs-center">
                      <a href="#!" class="body-2 black--text">EDIT</a>
                  </v-flex>
              </v-layout>
              <v-list-group
                      v-else-if="item.children"
                      v-model="item.model"
                      :key="item.text"
                      :prepend-icon="item.model ? item.icon : item['icon-alt']"
                      append-icon=""
              >
                  <v-list-tile slot="activator">
                      <v-list-tile-content>
                          <v-list-tile-title>
                              {{ item.text }}
                          </v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile
                          v-for="(child, i) in item.children"
                          :key="i"
                          @click=""
                  >
                      <v-list-tile-action v-if="child.icon">
                          <v-icon>{{ child.icon }}</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-title>
                              {{ child.text }}
                          </v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>
              </v-list-group>
              <v-list-tile v-else :key="item.text" @click="" :to="item.to">
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title>
                          {{ item.text }}
                      </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </template>
          <template v-if="!isLogedIn" v-for="item in userNotLogin">
              <v-layout
                      v-if="item.heading"
                      :key="item.heading"
                      row
                      align-center
              >
                  <v-flex xs6>
                      <v-subheader v-if="item.heading">
                          {{ item.heading }}
                      </v-subheader>
                  </v-flex>
                  <v-flex xs6 class="text-xs-center">
                      <a href="#!" class="body-2 black--text">EDIT</a>
                  </v-flex>
              </v-layout>
              <v-list-group
                      v-else-if="item.children"
                      v-model="item.model"
                      :key="item.text"
                      :prepend-icon="item.model ? item.icon : item['icon-alt']"
                      append-icon=""
              >
                  <v-list-tile slot="activator">
                      <v-list-tile-content>
                          <v-list-tile-title>
                              {{ item.text }}
                          </v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile
                          v-for="(child, i) in item.children"
                          :key="i"
                          @click=""
                  >
                      <v-list-tile-action v-if="child.icon">
                          <v-icon>{{ child.icon }}</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-title>
                              {{ child.text }}
                          </v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>
              </v-list-group>
              <v-list-tile v-else :key="item.text" @click="" :to="item.to">
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title>
                          {{ item.text }}
                      </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="blue darken-3"
            dark
            app
            fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Filma24.stream</span>
        <span class="hidden-md-and-up">F24</span>
      </v-toolbar-title>
      <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
       <router-view></router-view>
        <vue-snotify></vue-snotify>
          <loader></loader>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import Loader from './components/layouts/_loadeer'
    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                { icon: 'dashboard', text: 'Home', to:'/' },
                { icon: 'history', text: 'About', to:'/about' },
            ],
            userNotLogin: [
                { icon: 'account_circle', text: 'Login', to:'/login'},
                { icon: 'account_circle', text: 'Sigmup', to:'/signup' },
            ],
            userIsLogin: [
                { icon: 'account_circle', text: 'Profile', to:'/profile' },
                { icon: 'account_circle', text: 'Logout', to:'/logout' }
            ],
            userIsAdmin: [
                { icon: 'account_circle', text: 'Admin', to:'/dashboard' }
            ]
        }),
        props: {
            source: String
        },
        components: {
            Loader
        },
        computed: {
            isLogedIn() {
             return this.$store.getters.loggedIn
            },
        },
        created() {
            if (this.isLogedIn){
                this.$store.dispatch('getUser')
            }
        }
    }
</script>
<style>
  @import "~vue-snotify/styles/material.css";
</style>