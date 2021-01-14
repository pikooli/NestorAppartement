import { checkIfEntryInArray } from "./SearchFunctions";

export function searchRoom(bookings, newArray, searchValue) {
  if (searchValue.room) {
    newArray = checkIfEntryInArray(
      bookings,
      newArray,
      searchValue,
      "room",
      "number"
    );
    newArray = checkIfEntryInArray(
      bookings,
      newArray,
      searchValue,
      "room",
      "area"
    );
    newArray = checkIfEntryInArray(
      bookings,
      newArray,
      searchValue,
      "room",
      "price"
    );
  }

  return newArray;
}
