import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLongLat( state: PlacesState, coords:{lng:number, lat:number}) {
        console.log("las cords lng",coords.lng)
        console.log("las cords lat",coords.lat)
        state.userLocation = [coords.lng, coords.lat]
        state.isLoadding = false
    }
}


export default mutation;