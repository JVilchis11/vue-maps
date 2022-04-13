import { usePlacesStore } from "@/hooks";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name:'MapComponent',
    setup(){
        const mapElement = ref<HTMLDivElement>()
        const {isUserLocationReady, userLocation} = usePlacesStore()

        const initMap = () => {
            const map = new mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
                });
        }

        onMounted(()=>{
            if(isUserLocationReady) return initMap()
            
        })

        return{
            isUserLocationReady,
            mapElement
        }
    }
})