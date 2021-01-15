import { input } from "../Utlis/Inputs";
import { showPicture } from "../Utlis/ShowPicture";
import { image } from "../Utlis/Url";
import { joinTextNormal } from "../Utlis/TextStyle/Normal";
import { removeBtn } from "../Utlis/Btn/RemoveBtn";
import { searchBtn } from "../Utlis/Btn/SearchBtn";
import { isArrayEmpty } from "../Utlis/IsArrayEmpty";

function displayRoom(room, index, removeFunction) {
  if (!room) return null;
  return (
    <li key={room.id} className="list-group-item my-2">
      <div className="row ">
        <div className="col-sm-2">{showPicture(image.room, "room")}</div>
        <div className="col-sm">
          {joinTextNormal("Number", room.number)}
          {joinTextNormal("Area", room.area)}
          {joinTextNormal("Price", room.price)}
          {removeBtn(null, () => {
            removeFunction(room, index);
          })}
        </div>
      </div>
    </li>
  );
}

export function displayRooms(rooms, removeFunction) {
  if (!Array.isArray(rooms) || isArrayEmpty(rooms)) return null;
  return (
    <div className="row mt-5 mb-3">
      <div className="card mt-3">
        <ul className="list-group list-group-flush">
          {rooms.map((room, index) => displayRoom(room, index, removeFunction))}
        </ul>
      </div>
    </div>
  );
}
//  search field

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row">
        {input(searchValue, setSearchValue, "number")}
        {input(searchValue, setSearchValue, "area")}
        {input(searchValue, setSearchValue, "price")}
        {searchBtn(triggerSearch)}
      </div>
    </form>
  );
}
