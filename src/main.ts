import { createApp } from "vue"
import { createRouter, createWebHistory } from "@ionic/vue-router"
import { createPinia } from "pinia"
import { IonicVue } from "@ionic/vue"
import routes from "virtual:generated-pages"

import "virtual:windi.css"
import "virtual:windi-devtools"

import App from "./App.vue"

import "@ionic/vue/css/core.css"
import "@ionic/vue/css/normalize.css"
import "@ionic/vue/css/structure.css"
import "@ionic/vue/css/typography.css"
import "@ionic/vue/css/padding.css"
import "@ionic/vue/css/float-elements.css"
import "@ionic/vue/css/text-alignment.css"
import "@ionic/vue/css/text-transformation.css"
import "@ionic/vue/css/flex-utils.css"
import "@ionic/vue/css/display.css"
import "./theme/variables.css"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(createPinia())

router.isReady().then(() => {
  app.mount("#app")
})
