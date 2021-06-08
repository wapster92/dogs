import axios from "axios";
import {moveDogs, getDogs} from '@/utils/helpers'

export default {
  state:() => ({
    allDogs: [],
    breedDogs: [],
    allBreedDogs: [],
    favorites: [],
  }),
  mutations: {
    addItems(state, payload) {
      state.allDogs = [...payload];
    },
    addAllBreedDogs(state, payload) {
      state.allBreedDogs = [...payload];
    },
    addBreedDogs(state, payload) {
      state.breedDogs = [...moveDogs(state.allBreedDogs, payload)];
    },
    addFavorites(state, payload) {
      let idx = state.favorites.findIndex(el => {
        return el === payload;
      });
      if(idx >= 0) {
        state.favorites.splice(idx, 1);
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      } else {
        state.favorites.push(payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
    },
    getLocalStorage(state) {
      state.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    },
  },
  actions: {
    async getAllDogs({state, commit}, page) {
      try {
        let arr = state.allDogs;
        let result = await getDogs(arr, page);
        commit('addItems', result);
      } catch (e) {
        console.error(e);
      }
    },
    async getAllBreedDogs({commit}, payload) {
      try {
        let result = await axios.get(`https://dog.ceo/api/breed/${payload}/images`);
        commit('addAllBreedDogs', result.data.message);
      } catch (e) {
        console.error(e);
      }
    },
    addBreedDogs({commit}, payload) {
      commit('addBreedDogs', payload)
    },
    addFavorites({commit}, payload) {
      commit('addFavorites', payload)
    }
  }
}
