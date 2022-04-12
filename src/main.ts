import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Verify if browser supports geolocation
if( !navigator.geolocation ){
    throw new Error("Your beowser not support Geolocation")
}


createApp(App).use(store).use(router).mount('#app')
