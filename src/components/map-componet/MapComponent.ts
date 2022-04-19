import { usePlacesStore } from "@/hooks";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name:'MapComponent',
    setup(){
        const mapElement = ref<HTMLDivElement>()
        const {isUserLocationReady, userLocation} = usePlacesStore()

        const initMap = async () => {

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const popUpLocation = new Mapboxgl.Popup()
            .setLngLat(userLocation.value!)
            .setHTML(`
                <h4>I'm here</h4>
                <p>You are at ${userLocation.value}</p>
                <p>Enjoy map box location</p>
            `)

            const myLocationMarker = new Mapboxgl.Marker()
            .setPopup(popUpLocation)
            .setLngLat(userLocation.value!)
            .addTo(map)
        }

        onMounted(()=>{
            if(isUserLocationReady)  initMap()
            
        })

        watch( isUserLocationReady, (newVal) => {
            if(isUserLocationReady)  initMap()
        })

        return{
            isUserLocationReady,
            mapElement
        }
    }
})