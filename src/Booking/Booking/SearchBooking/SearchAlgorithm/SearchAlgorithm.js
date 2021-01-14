import { objIsEmplty } from "../utils";
import { searchApartment } from "./SearchApartmentAlgorithm";
import { searchClient } from "./SearchClientAlgorithm";
import { searchRoom } from "./SearchRoomAlgorithm";

export function searchAlgorithm(bookings, searchValue) {
  let newArray = [];

  if (
    objIsEmplty(searchValue.apartment) &&
    objIsEmplty(searchValue.room) &&
    objIsEmplty(searchValue.client)
  )
    return null;
  newArray = searchApartment(bookings, newArray, searchValue);
  newArray = searchRoom(bookings, newArray, searchValue);
  newArray = searchClient(bookings, newArray, searchValue);
  return newArray;
}
