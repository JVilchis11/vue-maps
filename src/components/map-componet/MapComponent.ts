import { usePlacesStore } from "@/hooks";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name:'MapComponent',
    setup(){
        const mapElement = ref<HTMLDivElement>()
        const {isUserLocationReady} = usePlacesStore()

        onMounted(()=>{
            console.log( mapElement.value );
            
        })

        return{
            isUserLocationReady,
            mapElement
        }
    }
})