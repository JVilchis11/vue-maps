import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit }, data ) {
        
        navigator.geolocation.getCurrentPosition(
            ( {coords} ) => commit('setLongLat',{lng:coords.longitude, lat:coords.latitude}),
            (err) => {
                console.error(err)
                throw new Error("No Geoloaction")
            }
            
        )
    }
}



export default actions;