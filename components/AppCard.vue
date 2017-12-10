<template>
  <section class="card" v-bind="$props">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'AppCard'
  }
</script>

<style scoped>
  .card {
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,.5);
    margin: 16px auto;
    max-width: 900px;
    width: 90vw;
  }
  .card > *:not(.card-noPadding) {
    padding: 16px;
  }
</style>
