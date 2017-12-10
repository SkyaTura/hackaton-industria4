<template>
  <div class="input-field col s12">
     <select
        v-bind="$props"
        :id="id"
        @blur="setActivity(false)"
        @focus="setActivity(true)"
      >
    <label :for="id" class="active">
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'AppSelect',
    data () {
      return {
        isActive: false
      }
    },
    props: {
      id: String,
      items: Array,
    },
    computed: {
      activityStatus () {
        return this.isActive || this.value ? 'active' : ''
      }
    },
    methods: {
      setActivity (state) {
        this.isActive = state
      }
    }
  }
</script>

<style scoped>
</style>
