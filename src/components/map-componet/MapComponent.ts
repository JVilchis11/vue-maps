import { useMapStore, usePlacesStore } from "@/hooks";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import { socket, state } from "@/socketio";

export default defineComponent({
  name: "MapComponent",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isUserLocationReady, userLocation } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {
      if (!userLocation.value) throw new Error("user location no existe");
      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const popUpLocation = new Mapboxgl.Popup().setLngLat(userLocation.value!)
        .setHTML(`
                <h4>I'm here</h4>
                <p>You are at ${userLocation.value}</p>
                <p>Enjoy map box location</p>
            `);

      new Mapboxgl.Marker()
        .setPopup(popUpLocation)
        .setLngLat(userLocation.value!)
        .addTo(map);

      // set map to store
      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) {
        socket.connect();
        console.log(state.fooEvents);
        return initMap();
      }
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
