import { checkIfEntryInArrayWithoutMainField } from "../../Utlis/SearchFunction/SearchWithoutMainField";

export function searchApartment(apartements, searchValue) {
  let retArray = [];

  if (
    !searchValue.number &&
    !searchValue.name &&
    !searchValue.nbRooms &&
    !searchValue.street &&
    !searchValue.zipCode
  )
    return null;

  if (searchValue.number) {
    retArray = checkIfEntryInArrayWithoutMainField(
      apartements,
      retArray,
      searchValue,
      "number"
    );
  }
  if (searchValue.nbRooms) {
    if (retArray.length)
      retArray = retArray.map((apartement) => {
        return apartement &&
          apartement.rooms.length === Number(searchValue.nbRooms)
          ? apartement
          : null;
      });
    else
      apartements.forEach((apartement) => {
        if (
          apartement &&
          apartement.rooms.length === Number(searchValue.nbRooms)
        )
          retArray.push(apartement);
      });
  }

  if (searchValue.name) {
    retArray = checkIfEntryInArrayWithoutMainField(
      apartements,
      retArray,
      searchValue,
      "name"
    );
  }

  if (searchValue.street) {
    retArray = checkIfEntryInArrayWithoutMainField(
      apartements,
      retArray,
      searchValue,
      "street"
    );
  }

  if (searchValue.zipCode) {
    retArray = checkIfEntryInArrayWithoutMainField(
      apartements,
      retArray,
      searchValue,
      "zipCode"
    );
  }

  return retArray;
}
