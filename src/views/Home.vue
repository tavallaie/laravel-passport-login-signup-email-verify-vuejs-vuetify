<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
    metaInfo: {
        title: 'Titulli i Home Page', // set a title
        meta: [{                 // set meta
            name: 'keyWords i home page',
            content: 'content i home page'
        }],
        link: [{                 // set link
            rel: 'asstes',
            href: 'https://assets-cdn.github.com/'
        }]
    }
}
</script>
