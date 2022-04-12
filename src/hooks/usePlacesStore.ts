import { StateInterface } from "@/store"
import { onMounted, computed } from "vue"
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
        /* SATE */
        isLoading: computed( () => store.state.places.isLoadding),
        userLocation: computed( () => store.state.places.userLocation),
        /* GETTERS */
        isUserLocationReady: computed<boolean>(()=>store.getters['places/isUserLocationReady'])
        /* ACTIONS */
        /* MUTATIONS */
    }
}