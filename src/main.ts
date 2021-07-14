import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { storeKey, createStore } from './store/Store';
import './tailwind.css'

const app = createApp(App)

app.provide(storeKey, createStore())
app.use(router)

app.mount('#app');