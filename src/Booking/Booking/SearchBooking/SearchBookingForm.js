import { searchClientInput } from "./SearchClientInputs";
import { searchApartmentInput } from "./SearchApartmentInputs";
import { searchRoomInput } from "./SearchRoomInputs";

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
