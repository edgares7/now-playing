<template>
  <div class="home bg-black">
    <div class="header w-screen flex items-center justify-center">
      <h1 class="text-white">Now Playing</h1>
    </div>
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
<style lang="scss" scoped>
h1 {
  font-size: 40px;
  font-family: "Righteous", cursive;
}
</style>
