import Vue from 'vue'
import Firebase from 'firebase'
import FirebaseConfig from '~/firebase.config.js'
import 'firebase/firestore'

const firebasePlugin = {
  install () {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$firebase) {
      Vue.prototype.$firebase = Firebase.initializeApp(FirebaseConfig)
    }
  }

}

Vue.use(firebasePlugin)

export default (ctx) => {
  const { app, store } = ctx

  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('auth/autoLogin', user)
    }
  })

  app.$firebase = Vue.prototype.$firebase
  ctx.$firebase = Vue.prototype.$firebase
  if (store) {
    store.$firebase = Vue.prototype.$firebase
  }
}
