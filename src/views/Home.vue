<template>
  <div class="home bg-black">
    <div class="header w-screen flex items-center justify-center">
      <h1 class="text-white">Now Playing</h1>
    </div>
    <MovieOverview />
  </div>
</template>

<script>
import MovieOverview from "@/components/MovieOverview";
export default {
  name: "Home",
  components: {
    MovieOverview
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 40px;
  font-family: "Righteous", cursive;
}
</style>
