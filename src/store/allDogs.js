import axios from "axios";
function unique(arr) {
  return Array.from(new Set(arr));
}
const getDogs = async (items, page) => {
  let max = 40;
  let sum = 40 * page
  let count = sum - items.length
  max = count <= max ? count : max
  const result = await axios.get(`https://dog.ceo/api/breeds/image/random/${max}`)
  items = unique(items.concat(result.data.message))
  if(items.length < sum) {
    return getDogs(items, page)
  } else {
    return items
  }
}
export default {
  state:() => ({
    items: [],
  }),
  mutations: {
    addItems(state, payload) {
      state.items = [...payload]
    }
  },
  actions: {
    async getAllDogs({state, commit}, page) {
      let arr = state.items
      let result = await getDogs(arr, page)
      commit('addItems', result)
    }
  }
}
