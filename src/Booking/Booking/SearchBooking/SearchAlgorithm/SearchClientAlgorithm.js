import { checkIfEntryInArrayWithMainField } from "../../../../Utlis/SearchFunction/SearchwithMainField";

export function searchClient(bookings, newArray, searchValue) {
  if (searchValue.client) {
    newArray = checkIfEntryInArrayWithMainField(
      bookings,
      newArray,
      searchValue,
      "client",
      "firstName"
    );
    newArray = checkIfEntryInArrayWithMainField(
      bookings,
      newArray,
      searchValue,
      "client",
      "lastName"
    );
    newArray = checkIfEntryInArrayWithMainField(
      bookings,
      newArray,
      searchValue,
      "client",
      "phone"
    );
  }

  return newArray;
}
