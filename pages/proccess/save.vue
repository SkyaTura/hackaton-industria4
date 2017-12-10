<template lang="pug">
  AppCard(style="margin-top: 48px; flex: 100%")
    section.card-content
      .input-group
        label Descrição do processo
        input

      .select-group
        label
        select
          each value in [1,2,3,4,5]
            option= value
        
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
    }
  }
</script>

<style scoped>
  .input-group
</style>
