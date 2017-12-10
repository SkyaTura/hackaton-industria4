<template lang="pug">
  AppCard(style="margin-top: 48px; flex: 100%")
    header.card-header
      h2 <
      h1 01
      h2 >
    section.card-content
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
      p asoaskdpokaospkd
    footer.card-footer
      p actions
</template>

<script>
  import AppCard from '~/components/AppCard.vue'

  export default {
    name: 'create',
    components: {
      AppCard
    },
    mounted () {
      this.$store.dispatch('layout/setStyle', {
        element: 'pageContent',
        style: 'background-color',
        value: '#373e4e'
      })
    }
  }
</script>

<style scoped>
  .pageContent {
    background: #373e4e;
  }
  .card-header h1,
  .card-header h2 {
    align-items: center;
    background-color: #ffca12;
    border-radius: 50%;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,.5);
    color: white;
    display: flex;
    font-weight: bold;
    height: 64px;
    justify-content: center;
    width: 64px;
  }
  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    position: sticky;
    top: 64px;
  }
  .card-header h2 {
    height: 32px;
    width: 32px;
    margin: 12px 12px;
    background-color: #fc7100;
  }
  .card-footer {
    background: white;
    bottom: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    position: sticky;
    border-radius: 0 0 5px 5px;
  }
</style>
