<template lang="pug">
  .cards
    each value in [1,2,3,4,5]
      AppCard(style="display: flex; margin: 7px auto;")
        header.card-header
          span 01
        section.card-content
          p Lorem ipsum dolor sit amet, et velit adipiscing amet. Dolor eget elit, faucibus mattis dolor vestibulum urna. Ligula vulputate ut, donec rutrum luctus, tincidunt est, ligula tincidunt auctor posuere modi eu.
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
  .cards{
    margin-top: 48px;
    flex: 100%;
  }
  .card-header span{
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
  .card-content{
    padding: 10px 15px;
  }
</style>
