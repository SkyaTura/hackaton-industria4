<template>
  <div class="pageContent" :style="pageStyle">
    <NavBar></NavBar>
    <main>
      <nuxt></nuxt>
    </main>
  </div>
</template>

<script>
  import NavBar from '~/components/layout/NavBar.vue'

  export default {
    components: {
      NavBar
    },
    props: {
      source: String
    },
    computed: {
      layout () {
        return this.$store.state.layout
      },
      pageStyle () {
        return this.layout.pageContent || {}
      },
      isDesktopView () {
        return false // this.$vuetify.breakpoint.width > 1264
      }
    }
  }
</script>

<style>
  body, html {
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  .pageContent {
    background: #fafafa;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: background .5s;
  }
  main {
    flex: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
