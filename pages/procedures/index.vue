<template lang="pug">
  .cards
    AppFAB add
    template(v-for="item,key in items")
      AppCard.process-card(:key="key")
        header.card-header
          span {{ item.title }}
        section.card-content
          p {{ item.text }}
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
    },
    created () {
      this.$store.dispatch('procedures/fetchData')
    },
    computed: {
      items () {
        return this.$store.state.steps.procedure.steps
      }
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
