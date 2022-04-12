<script lang="ts" src="./MapComponent.ts"/>
<template>
    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
       <div class="text-center">
            <h3>Wait, please</h3>
            <span>Getting location...</span>
        </div>        
    </div>

    <div ref="mapElement" v-show="isUserLocationReady" class="map-container">

    </div>
</template>


<style scoped>
    .map-container{
        position: fixed;
        width: 100vh;
        height: 100vh;
        background-color: bisque;
    }


    .loading-map{
        color: white;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vh;
        height: 100vh;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>