<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["getCurrentMovies"])
  },
  mounted() {
    this.getCurrentMovies();
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/main";
</style>
