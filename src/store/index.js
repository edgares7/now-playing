import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let baseUrl = "https://api.themoviedb.org/3/movie/now_playing";
let apikey = "?api_key=e725fe3ed32db32d41d976be391ef0df";

export default new Vuex.Store({
  state: {
    currentMovies: []
  },
  mutations: {
    SET_CURRENT_MOVIES: (state, data) => (state.currentMovies = data)
  },
  actions: {
    getCurrentMovies({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrl + apikey}`)
          .then(response => {
            commit("SET_CURRENT_MOVIES", response.data.results);
            resolve();
          })
          .catch(err => {
            console.log(err);
            reject();
          });
      });
    }
  },
  modules: {}
});
