import { searchClientInput } from "./SearchClientInputs";
import { searchApartmentInput } from "./SearchApartmentInputs";
import { searchRoomInput } from "./SearchRoomInputs";
import { searchBtn } from "../../../Utlis/Btn/SearchBtn";

export function searchInput(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      {searchApartmentInput(searchValue, setSearchValue)}
      {searchRoomInput(searchValue, setSearchValue)}
      {searchClientInput(searchValue, setSearchValue)}
      {searchBtn(triggerSearch)}
    </form>
  );
}
