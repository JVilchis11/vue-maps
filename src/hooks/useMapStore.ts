import { StateInterface } from "@/store"
import mapboxgl from "mapbox-gl"
import { computed } from "vue"
import { useStore } from "vuex"

export const useMapStore = () =>{
    const store = useStore<StateInterface>()


    return {
        map: computed(() => store.state.map.map),
        duration: computed(() => store.state.map.duration),
        distance: computed(() => store.state.map.distance),
        /* MUTATIONS */
        setMap: (map: mapboxgl.Map) => store.commit('map/setMap',map)
    }
}