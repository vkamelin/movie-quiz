import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

// Axios configuration
import axios from 'axios'
const app = createApp(App)

// Add axios to global properties
app.config.globalProperties.$http = axios

// Pinia configuration
const pinia = createPinia()
app.use(pinia)

// Router configuration
app.use(router)

// Mount the app
app.mount('#app')
