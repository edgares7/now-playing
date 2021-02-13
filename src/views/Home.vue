<template>
  <div class="home">
    <div
      class="movies_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="(movie, i) in currentMovies" :key="i" class="movie">
        <img
          class="movie__poster"
          :src="`https://image.tmdb.org/t/p/w500` + movie.poster_path"
          alt=""
        />
        <div class="movie__info">
          <h2 class="movie__info--title">{{ movie.title }}</h2>
          <p class="movie__info--overview">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["currentMovies"])
  }
};
</script>
<style lang="scss" scoped>
.movie {
  &:hover {
    .movie__info {
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 10;
    }
  }
  &__info {
    position: absolute;
    height: 100%;
    z-index: -1;
  }
}
</style>
