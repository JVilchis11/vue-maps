import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        navigator.geolocation.getCurrentPosition(
            ( {coords} ) => commit('setLongLat',coords),
            (err) => {
                console.error(err)
                throw new Error("No Geoloaction")
            }
            
        )
    }
}



export default actions;