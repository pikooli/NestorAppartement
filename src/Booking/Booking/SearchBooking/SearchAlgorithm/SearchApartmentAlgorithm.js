function alreadyEntryInArray(bookings, newArray, searchValue, field) {
  if (searchValue.apartment[field]) {
    newArray = newArray.map((element) => {
      if (
        element &&
        element.room.apartment[field] === searchValue.apartment[field]
      )
        return element;
      return null;
    });
  }
  return newArray;
}

function NotEntryInArray(bookings, newArray, searchValue, field) {
  if (searchValue.apartment[field]) {
    newArray = bookings.map((element) => {
      if (
        element &&
        element.room.apartment[field] === searchValue.apartment[field]
      )
        return element;
      return null;
    });
  }
  if (newArray.length) return newArray;
  return [];
}

function checkIfEntryInArray(bookings, newArray, searchValue, field) {
  if (newArray && newArray.length) {
    newArray = alreadyEntryInArray(bookings, newArray, searchValue, field);
  } else newArray = NotEntryInArray(bookings, newArray, searchValue, field);
  return newArray;
}

export function searchApartment(bookings, newArray, searchValue) {
  if (searchValue.apartment) {
    newArray = checkIfEntryInArray(bookings, newArray, searchValue, "number");
    newArray = checkIfEntryInArray(bookings, newArray, searchValue, "name");
    newArray = checkIfEntryInArray(bookings, newArray, searchValue, "street");
    newArray = checkIfEntryInArray(bookings, newArray, searchValue, "zipCode");
  }
  return newArray;
}
