import axios from "axios";

export const unique = arr => {
  return Array.from(new Set(arr));
}

export const getDogs = async (items, page) => {
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

export const moveDogs = (items, page) => {
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
