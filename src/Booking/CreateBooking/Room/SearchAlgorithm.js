import { checkIfEntryInArrayWithoutMainField } from "../../../Utlis/SearchFunction/SearchWithoutMainField";

export function searchRoom(clients, searchValue) {
  let newArray = [];
  if (!searchValue.number && !searchValue.area && !searchValue.price)
    return null;
  newArray = checkIfEntryInArrayWithoutMainField(
    clients,
    newArray,
    searchValue,
    "number"
  );
  newArray = checkIfEntryInArrayWithoutMainField(
    clients,
    newArray,
    searchValue,
    "area"
  );

  newArray = checkIfEntryInArrayWithoutMainField(
    clients,
    newArray,
    searchValue,
    "price"
  );
  return newArray;
}
