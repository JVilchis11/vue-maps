import { reactive } from "vue";
import { io } from "socket.io-client";
import { useStore } from "vuex"
import { StateInterface } from "@/store"
export const state = reactive({
  connected: false,
  fooEvents: [{}],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:8000/";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("coordenadas-actuales", (msg) => {
  console.log(msg);
  state.fooEvents.push(msg);
});

socket.on("coordenadas-from-server", (msg) => {
  const store = useStore<StateInterface>();
  store.dispatch('places/updateCoords',{msg:"hola param"})
  console.log(msg);
  state.fooEvents.push(msg);
});