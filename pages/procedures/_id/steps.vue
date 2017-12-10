<template lang="pug">
  .cards
    template(v-for="item,key in procedure.steps")
      AppCard(:key="key", style="display: flex; margin: 7px auto;")
        header.card-header
          span {{ key.toString().padLeft(2, '0') }}
        section.card-content
          p {{ item.text }}
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
      const { id } = this
      this.$store.dispatch('steps/fetchData', id)
    },
    computed: {
      procedure () {
        const { id } = this
        const items = this.$store.state.procedures.items
        return items[id] || {}
      }
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
