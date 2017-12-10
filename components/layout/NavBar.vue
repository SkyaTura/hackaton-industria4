<template>
  <nav>
    <span>
      <slot name="text">Industria 4</slot>
    </span>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  nav {
    background-color: #373e4e;
    color: white;
    font-weight: bold;
    min-height: 55px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    height: 64px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,.5);
    position: sticky;
    top: 0;
  }
</style>
