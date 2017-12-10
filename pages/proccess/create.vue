<template lang="pug">
  AppCard(style="margin-top: 48px; flex: 100%")
    header.card-header.card-noPadding
      AppButton.headerAction <
      AppButton.headerIndex 01
      AppButton.headerAction +
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
      .mediaButtons
        AppButton.button-flat A
        AppButton.button-flat B
        AppButton.button-flat C
      .recordButton
        AppButton M
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
  .pageContent {
    background: #373e4e;
  }
  .card-header {
    align-items: center;
    display: flex;
    font-weight: 200;
    justify-content: center;
    margin: 0;
    padding: 0;
    position: sticky;
    top: 64px;
    transform: translateY(-50%);
  }
  .card-header .headerAction,
  .card-header .headerIndex {
    font-size: 24px;
    font-weight: bold;
    height: 64px;
    justify-content: center;
    width: 64px;
  }
  .card-header .headerAction {
    background-color: #fc7100;
    font-weight: 400;
    height: 32px;
    margin: 0 6px;
    width: 32px;
  }
  .card-content {
    margin-top: -32px;
  }
  .card-footer {
    background: white;
    bottom: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    display: flex;
    position: sticky;
    border-radius: 0 0 5px 5px;
  }
  .card-footer > * {
    flex: 50%;
  }
  .recordButton {
    text-align: right;
  }
</style>
