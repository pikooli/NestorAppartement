import { checkIfEntryInArrayWithoutMainField } from "../../../Utlis/SearchFunction/SearchWithoutMainField";

export function searchClient(clients, searchValue) {
  let retArray = [];
  if (
    !searchValue.firstName &&
    !searchValue.lastName &&
    !searchValue.phone &&
    !searchValue.birthDate &&
    !searchValue.nationality
  )
    return null;

  if (searchValue.firstName) {
    retArray = checkIfEntryInArrayWithoutMainField(
      clients,
      retArray,
      searchValue,
      "firstName"
    );
  }

  if (searchValue.lastName) {
    retArray = checkIfEntryInArrayWithoutMainField(
      clients,
      retArray,
      searchValue,
      "lastName"
    );
  }

  if (searchValue.phone) {
    retArray = checkIfEntryInArrayWithoutMainField(
      clients,
      retArray,
      searchValue,
      "phone"
    );
  }

  if (searchValue.birthDate) {
    retArray = checkIfEntryInArrayWithoutMainField(
      clients,
      retArray,
      searchValue,
      "birthDate"
    );
  }

  if (searchValue.nationality) {
    retArray = checkIfEntryInArrayWithoutMainField(
      clients,
      retArray,
      searchValue,
      "nationality"
    );
  }

  return retArray;
}
