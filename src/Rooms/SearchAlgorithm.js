function alreadyEntryInArray(newArray, searchValue, mainField, field) {
  if (searchValue[field]) {
    newArray = newArray.map((element) => {
      if (element && element[field] === searchValue[field]) return element;
      return null;
    });
  }
  return newArray;
}

function NotEntryInArray(array, newArray, searchValue, field) {
  if (searchValue[field]) {
    newArray = array.map((element) => {
      if (element && element[field] === searchValue[field]) return element;
      return null;
    });
  }
  if (newArray.length) return newArray;
  return [];
}

function checkIfEntryInArray(array, newArray, searchValue, field) {
  if (newArray && newArray.length) {
    newArray = alreadyEntryInArray(newArray, searchValue, field);
  } else newArray = NotEntryInArray(array, newArray, searchValue, field);
  return newArray;
}

export function searchRoom(clients, searchValue) {
  let newArray = [];
  if (!searchValue.number && !searchValue.area && !searchValue.price)
    return null;
  newArray = checkIfEntryInArray(clients, newArray, searchValue, "number");
  newArray = checkIfEntryInArray(clients, newArray, searchValue, "area");

  newArray = checkIfEntryInArray(clients, newArray, searchValue, "price");
  return newArray;
}
