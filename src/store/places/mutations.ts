import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLongLat( state: PlacesState, coords:{lng:number, lat:number}) {
        state.userLocation = [coords.lng, coords.lat]
        state.isLoadding = false
    }
}


export default mutation;