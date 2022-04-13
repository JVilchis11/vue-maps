import { usePlacesStore } from "@/hooks";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name:'MapComponent',
    setup(){
        const mapElement = ref<HTMLDivElement>()
        const {isUserLocationReady, userLocation} = usePlacesStore()

        const initMap = async () => {

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
                });
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