import { reactive } from "vue";
import { io } from "socket.io-client";
import { usePlacesStore } from "./hooks";
export const stateSocketEvents = reactive({
  connected: false,
  fooEvents: {
    idtren:0,
    latitude:0,
    longitude:0,
    velocidad:0
  },
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:8000/";

export const socket = io(URL);
const { updateLocation } = usePlacesStore();

socket.on("connect", () => {
  stateSocketEvents.connected = true;
});

socket.on("disconnect", () => {
  stateSocketEvents.connected = false;
});

socket.on("coordenadas-actuales", (msg) => {
  console.log(msg);
  stateSocketEvents.fooEvents = msg;
});

socket.on("coordenadas-from-server", (msg) => {
  stateSocketEvents.fooEvents = msg
});