<template>
  <div id="mapContainer"></div>
</template>
<script>
import { map, tileLayer, marker, icon } from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapView",
  data() {
    return { container: null, chests: [] };
  },
  async mounted() {
    this.chests = await axios.get("http://localhost:3000/rewards");
    this.container = map("mapContainer").setView([48.891008, 2.2412078], 12);

    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.container);

    const chestIcon = icon({
      iconUrl: "chest.png",
    });

    for (const chest of this.chests.data) {
      marker(chest.coordinates, { icon: chestIcon })
        .addTo(this.container)
        .bindPopup(chest.name);
    }
  },
  beforeUnmount() {
    this.container.remove();
  },
};
</script>
<style>
#mapContainer {
  height: 520px;
}
</style>
