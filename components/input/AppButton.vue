<template>
  <button v-bind="$props" class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'AppButton'
  }
</script>

<style scoped>
  button {
    background-color: #ffca12;
    border: none;
    border-radius: 50%;
    color: white;
    display: inline-flex;
    margin: 0 6px;
    align-items: center;
    height: 32px;
    justify-content: center;
    width: 32px;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,.5);
    transition: background .5s;
  }
  button.button-flat {
    background: transparent;
    color: #ffca12;
    box-shadow: none;
  }
  button.button-flat:active {
    transition: background 0s;
    background: rgba(0,0,0,.2);
  }
</style>
