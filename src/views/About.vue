
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  export default{
      name: 'About',
          metaInfo: {
          title: 'Titulli i About Page', // set a title
              meta: [{                 // set meta
              name: 'keyWords i About page',
              content: 'content i About page'
          }],
              link: [{                 // set link
              rel: 'asstes',
              href: 'https://assets-cdn.github.com/'
          }]
      }
  }
</script>