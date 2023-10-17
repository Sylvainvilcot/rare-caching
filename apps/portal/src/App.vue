<template>
<div>
  <h1>Rare caching</h1>
  <CreateReward></CreateReward>
  <Map></Map>
</div>
</template>

<script>

import MapView from './components/MapView.vue';
import CreateReward from './components/CreateReward.vue';

export default {
  name: 'App',
  components: {
    Map: MapView,
    CreateReward
  }
}
</script>

<style>
</style>
