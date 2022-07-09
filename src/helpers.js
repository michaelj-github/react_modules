// Select a random item from an array of items and return that item // this is based on RandomChoice.js from the video demo
const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);    
  return items[idx]
}

// removes the first matching item from the items array, if item exists, and returns the items array. Otherwise returns undefined.  
const remove = (items, item) => {
  const returnArray = [];
  let found = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {  
      found = true;  
      for (let j = i + 1; j < items.length; j++) {
        returnArray.push(items[j])
      }
      break;
    } else {
      returnArray.push(items[i])
    }
  }
  if (found) {
    return returnArray;
  }
  }

export { choice, remove }