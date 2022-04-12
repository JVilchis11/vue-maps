import { StateInterface } from "@/store"
import { onMounted } from "vue"
import { useStore } from "vuex"

export const usePlacesStore = () =>{

    const store = useStore<StateInterface>()

    // when this hook being mounted on a view or component
    onMounted(() => {
        if( !store.getters['places/userLocationReady'] ){
            store.dispatch('places/getInitialLocation')
        }
    })

    return {

    }
}