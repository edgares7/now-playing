<template>
  <section class="movie">
    <div class="movie__container">
      <header
        class="movie__header"
        :style="{
          'background-image': 'url(' + backdropUrl + movie.backdrop_path + ')'
        }"
      >
        <div class="movie__wrap movie__wrap--header flex">
          <figure class="movie__poster">
            <img
              v-if="movie.poster_path"
              class="movie__img"
              :src="posterUrl + movie.poster_path"
            />
            <img
              v-if="!movie.poster_path"
              class="movies-item__img is-loaded"
              src="@/assets/scss/images/no-image.png"
            />
          </figure>
          <div class="movie__title">
            <h1 class="movie__title-text">
              {{ movie.title }}
              <span v-if="movie.tagline">{{ movie.tagline }}</span>
            </h1>
          </div>
        </div>
      </header>
      <div class="movie__main flex">
        <div class="movie__wrap movie__wrap--main">
          <div class="movie__info">
            <div v-if="movie.overview" class="movie__description">
              {{ movie.overview }}
            </div>
            <div class="movie__details">
              <!-- <div v-if="movie.genres.length" class="movie__details-block">
                <h2 class="movie__details-title">
                  Genres
                </h2>
                <div class="movie__details-text">
                  {{ nestedDataToString(movie.genres) }}
                </div>
              </div> -->
              <div v-if="movie.release_date" class="movie__details-block">
                <h2 class="movie__details-title">
                  Release Date
                </h2>
                <div class="movie__details-text">{{ movie.release_date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import img from '@/directives/v-image.js'
// import formatDate from '@/directives/v-formatDate.js'
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
  &__wrap {
    &--header {
      align-items: center;
      height: 100%;
    }
    &--main {
      // display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      flex-direction: row;
    }
  }
  &__header {
    height: 250px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    // background-color: #081c24;
    // height: 350px;
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
  }
  &__poster {
    background: #081c24;
    // display: block;
    // position: absolute;
    width: calc(45% - 40px);
    // top: 285px;
    // left: 40px;
  }
  &__img {
    // display: block;
    width: 100%;
    transform: scale(0.97) translateZ(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
    &.is-loaded {
      opacity: 1;
      transform: scale(1);
    }
  }
  &__title {
    position: relative;
    padding: 20px;
    color: #ffffff;
    text-align: center;
    width: 100%;
    &-text {
      font-weight: 500;
      line-height: 1.4;
      font-size: 24px;
      span {
        display: block;
        font-size: 14px;
        font-weight: 300;
        color: rgba(#ffffff, 0.7);
        margin-top: 10px;
      }
    }
  }
  &__main {
    background: #f8f8f8;
    min-height: calc(100vh - 250px);
  }
  &__actions {
    text-align: center;
    width: 100%;
    order: 2;
    padding: 20px;
    border-top: 1px solid rgba(#081c24, 0.05);
    &-icon {
      width: 16px;
      height: 16px;
      margin: 0 10px 0 0;
      fill: rgba(#081c24, 0.5);
      transition: fill 0.5s ease, transform 0.5s ease;
      &.waiting {
        transform: scale(0.8, 0.8);
      }
    }
    &-text {
      display: block;
      padding-top: 2px;
    }
  }
  &__info {
    width: 100%;
    padding: 20px;
    order: 1;
  }
  &__actions + &__info {
    margin-left: 0;
  }
  &__description {
    font-weight: 300;
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 20px;
  }
  &__details {
    &-block:not(:last-child) {
      margin-bottom: 20px;
    }
    &-title {
      margin: 0;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 14px;
      color: #01d277;
      font-size: 16px;
    }
    &-text {
      font-weight: 300;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
