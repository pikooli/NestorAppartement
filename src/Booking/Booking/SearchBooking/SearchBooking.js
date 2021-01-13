import { searchClientInput } from "./SearchClient";
import { searchApartmentInput } from "./SearchApartment";
import { searchRoomInput } from "./SearchRoom";

export function searchApartment(apartements, searchValue) {
  let retArray = [];

  if (
    !searchValue.numb &&
    !searchValue.name &&
    !searchValue.nbRooms &&
    !searchValue.street &&
    !searchValue.zipCode
  )
    return null;

  if (searchValue.numb) {
    apartements.forEach((apartement) => {
      if (apartement.number === searchValue.numb) retArray.push(apartement);
    });
    return retArray;
  } else if (searchValue.name) {
    apartements.forEach((apartement) => {
      if (apartement.name === searchValue.name) retArray.push(apartement);
    });
    return retArray;
  }
  if (searchValue.nbRooms) {
    apartements.forEach((apartement) => {
      if (apartement.rooms.length === Number(searchValue.nbRooms))
        retArray.push(apartement);
    });
  }

  if (searchValue.street) {
    if (retArray.length)
      retArray = retArray.map((apartement) => {
        return apartement.street === searchValue.street ? apartement : null;
      });
    else
      apartements.forEach((apartement) => {
        if (apartement.street === searchValue.street) retArray.push(apartement);
      });
  }

  if (searchValue.zipCode) {
    if (retArray.length)
      retArray = retArray.map((apartement) => {
        return apartement.zipCode === searchValue.zipCode ? apartement : null;
      });
    else
      apartements.forEach((apartement) => {
        if (apartement.zipCode === searchValue.zipCode)
          retArray.push(apartement);
      });
  }

  return retArray;
}

export function searchInput(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      {searchApartmentInput(searchValue, setSearchValue)}
      {searchRoomInput(searchValue, setSearchValue)}
      {searchClientInput(searchValue, setSearchValue)}
      <div className="d-flex justify-content-center my-3">
        <input
          type="submit"
          className="btn btn-primary "
          value="Search"
          onClick={(e) => {
            e.preventDefault();
            triggerSearch();
          }}
        ></input>
      </div>
    </form>
  );
}
