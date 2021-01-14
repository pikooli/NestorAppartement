function alreadyEntryInArray(
  bookings,
  newArray,
  searchValue,
  mainField,
  field
) {
  if (searchValue[mainField][field]) {
    newArray = newArray.map((element) => {
      if (
        element &&
        element[mainField][field] === searchValue[mainField][field]
      )
        return element;
      return null;
    });
  }
  return newArray;
}

function NotEntryInArray(bookings, newArray, searchValue, mainField, field) {
  if (searchValue[mainField][field]) {
    newArray = bookings.map((element) => {
      if (
        element &&
        element[mainField][field] === searchValue[mainField][field]
      )
        return element;
      return null;
    });
  }
  if (newArray.length) return newArray;
  return [];
}

export function checkIfEntryInArray(
  bookings,
  newArray,
  searchValue,
  mainField,
  field
) {
  if (newArray && newArray.length) {
    newArray = alreadyEntryInArray(
      bookings,
      newArray,
      searchValue,
      mainField,
      field
    );
  } else
    newArray = NotEntryInArray(
      bookings,
      newArray,
      searchValue,
      mainField,
      field
    );
  return newArray;
}
