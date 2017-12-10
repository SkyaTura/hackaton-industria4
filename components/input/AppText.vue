<template>
  <div class="input-field">
    <template v-if="multiline">
      <textarea
        v-bind="$props"
        :id="id"
        :type="type"
        @blur="setActivity(false)"
        @focus="setActivity(true)"
      ></textarea>
    </template>
    <template v-else>
      <input
        v-bind="$props"
        :id="id"
        :type="type"
        @blur="setActivity(false)"
        @focus="setActivity(true)"
      >
    </template>
    <label :for="id" class="active">
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'AppText',
    data () {
      return {
        isActive: false
      }
    },
    props: {
      id: String,
      type: {
        type: String,
        default: 'text'
      },
      multiline: {
        type: Boolean,
        default: false
      },
      label: String
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
  textarea {
    min-height: 100%;
    resize: none;
    display: inline-block;

  }
</style>
