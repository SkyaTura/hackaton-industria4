<template lang="pug">
  .cards
    template(v-for="item,key in steps")
      AppCard(:key="key", style="display: flex; margin: 7px auto; flex-direction: row; align-items: center;")
        header.card-header
          AppButton.stepIndex {{ (key + 1).toString().padStart(2, '0') }}
        section.card-content
          p {{ item.text }}
</template>

<script>
  import AppCard from '~/components/AppCard.vue'
  import { AppButton } from '~/components/input'

  export default {
    name: 'create',
    components: {
      AppCard,
      AppButton
    },
    mounted () {
      this.$store.dispatch('layout/setStyle', {
        element: 'pageContent',
        style: 'background-color',
        value: '#373e4e'
      })
      this.$store.dispatch('procedures/fetchData')
    },
    asyncData ({ params }) {
      const { id } = params
      return { id }
    },
    computed: {
      procedure () {
        const { id } = this
        const items = this.$store.state.procedures.items
        return items[id] || {}
      },
      steps () {
        return this.procedure.steps || []
      }
    }
  }
</script>

<style scoped>
  .cards {
    flex: 100%;
  }
  .card-header span {
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
  .stepIndex {
    font-size: 24px;
    font-weight: bold;
    height: 64px;
    justify-content: center;
    width: 64px;
  }
  .card-content {
    padding: 10px 15px;
    flex: 100%;
  }
  .card {
    display: flex;
    flex-direction: row;
  }
</style>
