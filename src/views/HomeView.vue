<template>
  <map-component></map-component>
</template>

<script lang="ts">
import { usePlacesStore } from '@/hooks';
import { defineComponent } from 'vue';
import MapComponent  from '@/components/map-componet/MapComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: { MapComponent },
  setup(){
    usePlacesStore()
  }
});
</script>
