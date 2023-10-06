import './assets/main.scss'

import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')

// This is just for fun. Since all colours are defined in hsl, we can randomise a "theme"
// by randomising a value for the --hue variable.
const randomHue = Math.floor(Math.random() * 360)
document.documentElement.style.setProperty('--hue', randomHue.toString())
