<template>
  <div class="movie">
    <Search />
    <div class="movie_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(movie, i) in currentMovies"
        :key="i"
        class="movie__container--single"
        @click="openModal(movie.title.replace(/\s+/g, ''))"
      >
        <img
          class="poster"
          :src="`https://image.tmdb.org/t/p/w500` + movie.poster_path"
          alt=""
        />
        <div class="info flex flex-col items-center justify-center">
          <h2 class="info__title text-center py-5">{{ movie.title }}</h2>
          <p class="info__overview text-center">{{ movie.overview }}</p>
        </div>
        <modal
          :height="800"
          :width="800"
          :name="movie.title.replace(/\s+/g, '')"
        >
          <button @click="$modal.hide(movie.title.replace(/\s+/g, ''))">
            <CloseIcon />
          </button>
          <Movie :movie="movie" />
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Search from "@/components/Search";
import Movie from "@/components/Movie";
import CloseIcon from "@/components/CloseIcon";
export default {
  name: "MovieOverview",
  components: {
    Search,
    Movie,
    CloseIcon
  },
  computed: {
    ...mapState(["currentMovies"])
  },
  methods: {
    openModal(title) {
      this.$modal.show(title);
    }
  }
};
</script>

<style lang="scss" scoped>
.movie {
  &__container {
    &--single {
      position: relative;
      &:hover {
        .info {
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 10;
        }
      }
    }
  }
}

.info {
  position: absolute;
  color: #ffffff;
  top: 0;
  height: 100%;
  z-index: -1;
  &__title {
    font-size: 20px;
    font-weight: 900;
  }
  &__overview {
    max-width: 80%;
    font-size: 12px;
  }
}
button {
  position: absolute;
  right: 2%;
  top: 2%;
  z-index: 10;
}
</style>
