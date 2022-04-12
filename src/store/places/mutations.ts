import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLongLat( state: PlacesState, coords) {
        state.userLocation = coords
        state.isLoadding = false
    }
}


export default mutation;