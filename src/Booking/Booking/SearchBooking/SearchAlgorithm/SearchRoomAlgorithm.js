import { checkIfEntryInArrayWithMainField } from "../../../../Utlis/SearchFunction/SearchwithMainField";

export function searchRoom(bookings, newArray, searchValue) {
  if (searchValue.room) {
    newArray = checkIfEntryInArrayWithMainField(
      bookings,
      newArray,
      searchValue,
      "room",
      "number"
    );
    newArray = checkIfEntryInArrayWithMainField(
      bookings,
      newArray,
      searchValue,
      "room",
      "area"
    );
    newArray = checkIfEntryInArrayWithMainField(
      bookings,
      newArray,
      searchValue,
      "room",
      "price"
    );
  }

  return newArray;
}
