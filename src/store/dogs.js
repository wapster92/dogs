import axios from "axios";
function unique(arr) {
  return Array.from(new Set(arr));
}
const getDogs = async (items, page) => {
  let max = 20;
  let sum = 20 * page;
  let count = Math.abs(sum - items.length);
  max = count <= max ? count : max;
  const result = await axios.get(`https://dog.ceo/api/breeds/image/random/${max}`);
  items = unique(items.concat(result.data.message));
  if(items.length < sum) {
    return getDogs(items, page);
  } else {
    return items;
  }
}

const moveDogs = (items, page) => {
  let arr = [];
  let max = 20;
  let sum = 20 * page;
  let count = items.length > sum ? sum : 0;
  if(count <= 0) return items
  max = count >= max ? count : max;
  for(let i = 0; i < max; i++) {
    arr.push(items[i]);
  }
  return arr;
}

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
      } else {
        state.favorites.push(payload);
      }
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
