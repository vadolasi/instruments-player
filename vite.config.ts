import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Components from "unplugin-vue-components/vite"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Components(),
    WindiCSS()
  ]
})
