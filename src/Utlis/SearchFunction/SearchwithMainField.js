import { compareString } from "../Compare";

function alreadyEntryInArray(newArray, searchValue, mainField, field) {
  if (searchValue[mainField][field]) {
    newArray = newArray.map((element) => {
      if (
        element &&
        compareString(element[mainField][field], searchValue[mainField][field])
      )
        return element;
      return null;
    });
  }
  return newArray;
}

function NotEntryInArray(array, newArray, searchValue, mainField, field) {
  if (searchValue[mainField][field]) {
    newArray = array.map((element) => {
      if (
        element &&
        compareString(element[mainField][field], searchValue[mainField][field])
      )
        return element;
      return null;
    });
  }
  if (newArray.length) return newArray;
  return [];
}

export function checkIfEntryInArrayWithMainField(
  array,
  newArray,
  searchValue,
  mainField,
  field
) {
  if (newArray && newArray.length) {
    newArray = alreadyEntryInArray(newArray, searchValue, mainField, field);
  } else
    newArray = NotEntryInArray(array, newArray, searchValue, mainField, field);
  return newArray;
}
