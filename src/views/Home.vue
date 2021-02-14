<template>
  <div class="home bg-black">
    <h1 class="text-white">Now Playing</h1>
    <Movie />
  </div>
</template>

<script>
import Movie from "@/components/Movie";
export default {
  name: "Home",
  components: {
    Movie
  }
};
</script>
