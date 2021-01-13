import { input } from "./utils";

export function searchRoomInput(searchValue, setSearchValue) {
  return (
    <div className="row ">
      {input(searchValue, setSearchValue, "number", "room")}
      {input(searchValue, setSearchValue, "area", "room")}
      {input(searchValue, setSearchValue, "price", "room")}
    </div>
  );
}
