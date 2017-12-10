<template lang="pug">
  AppCard.createStep(style="margin-top: 48px; flex: 100%")
    header.card-header.card-noPadding
      AppButton.headerAction(@click="cancelEdit", v-if="isNewStep")
        i.material-icons close
      AppButton.headerAction(@click="previousStep", :class="{ hidden: isFirstStep }", v-else)
        i.material-icons arrow_back
      AppButton.headerIndex {{ stepIndex }}
      AppButton.headerAction(@click="saveStep", v-if="isNewStep")
        i.material-icons check
      AppButton.headerAction(@click="nextStep", v-else)
        i.material-icons(v-if="isLastStep") add
        i.material-icons(v-else) arrow_forward
    section.card-content(v-if="isNewStep")
      textarea(
        id="stepInstructions",
        placeholder="Instruções",
        v-model="text"
      )
    section.card-content(v-else)
      p {{ step.text }}
    footer.card-footer.card-noPadding(v-show="isNewStep")
      .mediaButtons
        AppButton.button-flat
          i.material-icons attach_file
        AppButton.button-flat
          i.material-icons camera_alt
        AppButton.button-flat
          i.material-icons link
      .recordButton
        AppButton
          i.material-icons mic
</template>

<script>
  import AppCard from '~/components/AppCard.vue'
  import {
    AppButton,
    AppText
  } from '~/components/input'

  export default {
    data () {
      return {
        currentStep: 0
      }
    },
    components: {
      AppCard,
      AppButton,
      AppText
    },
    methods: {
      previousStep () {
        if (this.isFirstStep) return
        this.currentStep -= 1
      },
      nextStep () {
        if (this.isNewStep) return
        this.currentStep += 1
      },
      cancelEdit () {
        this.text = ''
        this.previousStep()
      },
      saveStep () {
        const {
          id,
          text
        } = this
        this.text = ''
        this.$store.dispatch('procedures/addProcedureStep', { id, text })
      }
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
      },
      step () {
        const { steps } = this.procedure
        return steps ? steps[this.currentStep] || {} : {}
      },
      stepIndex () {
        const index = this.currentStep + 1
        return index.toString().padStart(2, '0')
      },
      isLastStep () {
        const { currentStep, steps } = this
        return currentStep === steps.length - 1
      },
      isFirstStep () {
        return this.currentStep === 0
      },
      isNewStep () {
        const { currentStep, steps } = this
        return currentStep === steps.length
      }
    }
  }
</script>

<style scoped>
  .hidden {
    visibility: hidden;
    transform: scale(0);
  }
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
  .card-header > * {
    transition: transform .2s;
    will-change: transform;
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
    flex: 100%;
    margin-top: -32px;
    display: flex;
    flex-direction: column;
  }
  .card-footer {
    background: white;
    bottom: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    display: flex;
    position: sticky;
    border-radius: 0 0 5px 5px;
  }
  .card-footer {
    padding: 8px;
  }
  .mediaButtons {
    flex: 70%;
  }
  .recordButton {
    flex: 30%;
    text-align: right;
  }
  textarea {
    resize: none;
    flex: 100%;
  }
  .headerAction-back {
    visibility: hidden;
  }
</style>
