<template lang="pug">
  AppCard(style="margin-top: 48px; flex: 100%")
    section.card-content
      AppText(label="Nome do processo")
      AppSelect(id="select-area" items="getItems(false)")
</template>

<script>
  import AppCard from '~/components/AppCard.vue'
  import { AppButton, AppText, AppSelect } from '~/components/input'

  export default {
    name: 'save',
    components: {
      AppCard,
      AppButton,
      AppSelect,
      AppText
    },
    computed: {
      getItems () {
        return [1, 2, 3, 4, 5]
      }
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

</style>
