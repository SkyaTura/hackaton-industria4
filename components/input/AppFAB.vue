<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large" v-bind="$props">
      <i class="material-icons" :class="size">
        <slot></slot>
      </i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'AppFAB',
    props: {
      size: {
        type: String,
        default: 'large'
      }
    }
  }
</script>

<style scoped>
  a {
    background-color: #ffce12;
    color: white;
  }
</style>
