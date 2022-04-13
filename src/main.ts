import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyYXZpcm9kIiwiYSI6ImNrbGliZThjNTJseWcyb3FldXVsdTB6aGYifQ.zBxU4KeL9ZjWUtWOzKAMPg';

// Verify if browser supports geolocation
if( !navigator.geolocation ){
    throw new Error("Your beowser not support Geolocation")
}


createApp(App).use(store).use(router).mount('#app')
