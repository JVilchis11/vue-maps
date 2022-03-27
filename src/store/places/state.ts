export interface PlacesState {
    isLoadding: boolean;
    userLocation?:[number, number]; // lon, lat
}

function state(): PlacesState {
    return {
        isLoadding: true,
        userLocation: undefined
    }
}

export default state;