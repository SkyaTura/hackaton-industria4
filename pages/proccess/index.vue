<template lang="pug">
  .cards
    AppFAB add
    each value in [1,2,3,4,5]
      AppCard.process-card
        header.card-header
          span Area 01
        section.card-content
          p Lorem ipsum dolor sit amet, et velit adipiscing amet.
</template>

<script>
  import AppCard from '~/components/AppCard.vue'
  import {AppFAB} from '~/components/input'

  export default {
    name: 'create',
    components: {
      AppCard,
      AppFAB
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
  .process-card{
    flex: 50%;
    display: flex;
    margin: 7px auto;
    border-left: 3px solid #f106b5;
    border-radius: 5px;

  }
  .card-header span{
    color: #f106b5;
  }
  .card-content{
    padding: 10px 15px;
  }
</style>
