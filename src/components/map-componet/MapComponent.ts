import { useMapStore, usePlacesStore } from "@/hooks";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import { socket, stateSocketEvents } from "@/socketio";
import { Feature } from 'geojson';


export default defineComponent({
  name: "MapComponent",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isUserLocationReady, userLocation, updateLocation } = usePlacesStore();  
    const { setMap } = useMapStore();

    let marker: Mapboxgl.Marker | null = null; // referencia al marcador

    const initMap = async () => {
      if (!userLocation.value) throw new Error("user location no existe");
      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-99.12431375760976,19.2711925954283],//[-99.12579, 19.267914],//userLocation.value, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

    
      //---- PARA LAS ESTACIONES ---------------------------------------------------------------------------------------------------

          const marker1 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.10776694053483, 19.259364112251077])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 18</h4><p>Xochimilco</p>"))
            .addTo(map);
          
          marker1.getElement().setAttribute("src", "e1.png");

          const marker2 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.11124141895094, 19.26072085537547])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 17</h4><p>Francico Goitia</p>"))
            .addTo(map);
          
          marker2.getElement().setAttribute("src", "e2.png");

          const marker3 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.11822263726778, 19.26426664764249])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 16</h4><p>Huichapan</p>"))
            .addTo(map);
          
          marker3.getElement().setAttribute("src", "e3.png");

          const marker4 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.12555520339154, 19.267895582028054])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 15</h4><p>La noria</p>"))
            .addTo(map);
          
          marker4.getElement().setAttribute("src", "e4.png");

          const marker5 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.13315476761225, 19.27949615915988])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 14</h4><p>Tepepan</p>"))
            .addTo(map);
          
          marker5.getElement().setAttribute("src", "e5.png");  

          const marker6 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.1396653257774, 19.282736704003298])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 13</h4><p>Periferico</p>"))
            .addTo(map);
          
          marker6.getElement().setAttribute("src", "e6.png");  

          const marker7 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.14676815882366, 19.288722954281063])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 12</h4><p>Xomali</p>"))
            .addTo(map);
          
          marker7.getElement().setAttribute("src", "e7.png"); 

          const marker8 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.150682016125, 19.297479161727427])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 11</h4><p>Huipulco</p>"))
            .addTo(map);
          
          marker8.getElement().setAttribute("src", "e8.png"); 

          const marker9 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.14705105177131, 19.30184109620847])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 10</h4><p>Estadio Azteca</p>"))
            .addTo(map);
          
          marker9.getElement().setAttribute("src", "e9.png"); 

          const marker10 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.14298598411189,19.307304461968364]) 
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 9</h4><p>El Vergel</p>"))
            .addTo(map);
          
          marker10.getElement().setAttribute("src", "e10.png"); 

          const marker11 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.14056861404525,19.312586295411425])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 8</h4><p>Textitlan</p>"))
            .addTo(map);
          
          marker11.getElement().setAttribute("src", "e11.png"); 

          const marker12 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.13878205907274,19.317935073220347])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 7</h4><p>Registro federal</p>"))
            .addTo(map);
          
          marker12.getElement().setAttribute("src", "e12.png"); 

          const marker13 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.13817430455528,19.323837247352134]) 
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 6</h4><p>Nezahualpilli</p>"))
            .addTo(map);
          
          marker13.getElement().setAttribute("src", "e13.png"); 

          const marker14 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.1392909120838,19.327489356798047])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 5</h4><p>Xotepingo</p>"))
            .addTo(map);
          
          marker14.getElement().setAttribute("src", "e14.png"); 

          const marker15 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.14060927724796,19.331686458367006])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 4</h4><p>La virgen</p>"))
            .addTo(map);
          
          marker15.getElement().setAttribute("src", "e15.png"); 

          const marker16 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.1418561546479,19.335720019635986])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 3</h4><p>Ciudad Jardín</p>"))
            .addTo(map);
          
          marker16.getElement().setAttribute("src", "e16.png"); 

          const marker17 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.1434425581767,19.34082588785985])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 2</h4><p>Las Torres</p>"))
            .addTo(map);
          
          marker17.getElement().setAttribute("src", "e17.png"); 

          const marker18 = new Mapboxgl.Marker({
            element: document.createElement("img"),
            anchor: "bottom"
          })
            .setLngLat([-99.14048612811148,19.34362191862602])
            .setPopup(new Mapboxgl.Popup().setHTML("<h4>Estacion 1</h4><p>Tasquena</p>"))
            .addTo(map);
          
          marker18.getElement().setAttribute("src", "e18.png"); 

        //Para la línea del mapa jeje  
        map.on('load', () => {
        map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
          [-99.10776694053483, 19.259364112251077],
          [-99.10931811079253,19.259779367117662],
          [-99.11005553052172, 19.260094603804212],
          [-99.11124141895094, 19.26072085537547],
          [-99.11822263726778, 19.26426664764249],
          [-99.12555520339154, 19.267895582028054],
          [-99.12748474234317,19.26885127223021],
          [-99.12841007713573,19.269511001447302],
          [-99.12893326221011,19.2701965273347],
          [-99.12955597664299,19.27164887885148],
          [-99.13054265449226,19.274051000070084],
          [-99.13130093190189,19.27595363443598],
          [-99.13226856529964,19.27832454342242],
          [-99.13257291057585,19.278944823103146],
          [-99.13315476761225, 19.27949615915988],
          [-99.13393055939305,19.280209115227155],
          [-99.13437355420724,19.280428028626886],
          [-99.13783284797715,19.28126071121389],
          [-99.13838268271714,19.28160014766426],
          [-99.1396653257774, 19.282736704003298],
          [-99.14676815882366, 19.288722954281063],
          [-99.150682016125, 19.297479161727427],
          [-99.14705105177131, 19.30184109620847],
          [-99.14298598411189, 19.307304461968364],
          [-99.14056861404525, 19.312586295411425],
          [-99.13878205907274,19.317935073220347],
          [-99.13817430455528,19.323837247352134],
          [-99.1392909120838,19.327489356798047],
          [-99.14060927724796,19.331686458367006],
          [-99.1418561546479,19.335720019635986],
          [-99.1434425581767,19.34082588785985],
          [-99.14380523874814,19.343646124360383],
          [-99.14048612811148,19.34362191862602]
        ]
        }
        }
        });
        map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#4E97D1',
        'line-width': 4
        }
        });
        });



























      const popUpLocation = new Mapboxgl.Popup().setLngLat(userLocation.value!)
        .setHTML(`
          <h4>Tren 4</h4>
          <p>Velocidad: 4 km por hora</p>
        `);

      marker = new Mapboxgl.Marker({color: '#99ff33'})
        .setPopup(popUpLocation)
        .setLngLat(userLocation.value!)
        .addTo(map);

      // set map to store
      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) {
        socket.connect();        
        return initMap();
      }
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(stateSocketEvents, (newVal) => {
      if (isUserLocationReady.value) {
        const lat = newVal.fooEvents.latitude; 
        const lng = newVal.fooEvents.longitude;  
        updateLocation({lat,lng})
        if (marker) marker.setLngLat([lng, lat]); // actualiza la posición del marcador
      }
    });

    

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});

/*
export default defineComponent({
  
  name: "MapComponent",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { isUserLocationReady, userLocation, updateLocation } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {

      
      if (!userLocation.value) throw new Error("user location no existe");
      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 16, // starting zoom
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
        //console.log(state.fooEvents);
        return initMap();
      }
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(stateSocketEvents, (newVal) => {
        if (isUserLocationReady.value) {
            const lat = newVal.fooEvents.latitude; 
            const lng = newVal.fooEvents.longitude;  
            updateLocation({lat,lng})
            return initMap();
        }
        console.log(newVal.fooEvents);
    });


    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
*/