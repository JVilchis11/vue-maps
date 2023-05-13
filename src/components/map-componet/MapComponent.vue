<script lang="ts" src="./MapComponent.ts" />

<style>
        .imagen-flotante {
            float: right;
            margin-right: 20px;
        }
    </style>


<template>
    <div v-if="!isUserLocationReady"
        class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por favor!!</h3>
            <span>Localizando...</span>
        </div>
    </div>

<!--ZONA DE EXPERIMENTOS-->
    <div> <img src="Imagen2.png" alt=""> </div>
<!------------------------>

    <div v-show="isUserLocationReady"
        class="map-container"
        ref="mapElement"
    />

</template>

<style scoped>
.map-container {
    position: fixed;
    width: 95vw;
    height: 100vh;
    right: 0;
}

.loading-map {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 9999;
}

</style>