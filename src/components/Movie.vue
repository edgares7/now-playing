<template>
  <div class="movie">
    <div
      class="movie__header flex items-center justify-center"
      :style="{
        'background-image': 'url(' + backdropUrl + movie.backdrop_path + ')'
      }"
    >
      <div class="movie__header--title">
        <h1 class="movie-title">
          {{ movie.title }}
          <span v-if="movie.tagline">{{ movie.tagline }}</span>
        </h1>
      </div>
    </div>
    <div class="movie__body flex justify-between">
      <div class="movie__body--image">
        <img
          v-if="movie.poster_path"
          class="movie__img"
          :src="posterUrl + movie.poster_path"
        />
      </div>
      <div class="movie__body--copy flex flex-col py-10 px-6">
        <div class="overview" v-if="movie.overview">
          {{ movie.overview }}
        </div>
        <div class="release__date py-4" v-if="movie.release_date">
          <h2 class="release__date--header font-bold text-red-700">
            Release Date
          </h2>
          <div class="release__date--date">{{ movie.release_date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      backdropUrl: "https://image.tmdb.org/t/p/w500",
      posterUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
    };
  },
  props: {
    movie: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.movie {
  font-family: "Roboto Slab", serif;
  &__header {
    position: relative;
    height: 350px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: rgba(#081c24, 0.85);
    }
    &--title {
      position: relative;
      color: #ffffff;
      font-weight: 500;
      line-height: 1.4;
      font-size: 24px;
    }
  }
  &__body {
    &--image {
      width: calc(45% - 40px);
      margin-top: -60px;
      margin-left: 40px;
      z-index: 10;
    }
    &--copy {
      width: 50%;
    }
  }
}
</style>
