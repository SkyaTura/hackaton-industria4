<template lang="pug">
  .cards
    AppFAB add
    template(v-for="item,key in items")
      AppCard.process-card(:key="key", :class="item.area.color")
        header.card-header
          span {{ item.area.title }}
        header.card-content
          p {{ item.title }}
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
        return this.$store.state.procedures.items || {}
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
  .area-magenta {
    border-left: 4px solid #f106b5;
  }
  .area-magenta span {
    color: #f106b5;
  }
  .area-lime {
    border-left: 4px solid #3ebb43;
  }
  .area-lime span {
    color: #3ebb43;
  }
</style>
