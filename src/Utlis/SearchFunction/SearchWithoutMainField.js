import { compareString } from "../Compare";

function alreadyEntryInArray(newArray, searchValue, field) {
  if (searchValue[field]) {
    newArray = newArray.map((element) => {
      if (element && compareString(element[field], searchValue[field]))
        return element;
      return null;
    });
  }
  return newArray;
}

function NotEntryInArray(array, newArray, searchValue, field) {
  if (searchValue[field]) {
    newArray = array.map((element) => {
      if (element && compareString(element[field], searchValue[field]))
        return element;
      return null;
    });
  }
  if (newArray.length) return newArray;
  return [];
}

export function checkIfEntryInArrayWithoutMainField(
  array,
  newArray,
  searchValue,
  field
) {
  if (newArray && newArray.length) {
    newArray = alreadyEntryInArray(newArray, searchValue, field);
  } else newArray = NotEntryInArray(array, newArray, searchValue, field);
  return newArray;
}
