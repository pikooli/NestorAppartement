import { checkIfEntryInArray } from "./SearchFunctions";

export function searchClient(bookings, newArray, searchValue) {
  if (searchValue.client) {
    newArray = checkIfEntryInArray(
      bookings,
      newArray,
      searchValue,
      "client",
      "firstName"
    );
    newArray = checkIfEntryInArray(
      bookings,
      newArray,
      searchValue,
      "client",
      "lastName"
    );
    newArray = checkIfEntryInArray(
      bookings,
      newArray,
      searchValue,
      "client",
      "phone"
    );
  }

  return newArray;
}
