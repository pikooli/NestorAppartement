import { input } from "../Utlis/Inputs";
import { showPicture } from "../Utlis/ShowPicture";
import { image } from "../Utlis/Url";
import { joinTextNormal } from "../Utlis/TextStyle/Normal";
import { removeBtn } from "../Utlis/Btn/RemoveBtn";
import { searchBtn } from "../Utlis/Btn/SearchBtn";

function displayRoom(room, index, removeFunction) {
  if (!room) return null;
  return (
    <li key={room.id} className="list-group-item my-3">
      <div className="row">
        <div className="col-sm-2">{showPicture(image.room, "room")}</div>
        <div className="col-sm">
          {joinTextNormal("Room number", room.number)}
          {joinTextNormal("Room area", room.area)}
          {joinTextNormal("Room price", room.price)}
          <span>
            {removeBtn(null, () => {
              removeFunction(room, index);
            })}
          </span>
        </div>
      </div>
    </li>
  );
}

export function displayRooms(rooms, removeFunction) {
  if (!rooms) return null;
  return (
    <div className="card mb-3">
      <ul className="list-group list-group-flush">
        {rooms.map((room, index) => displayRoom(room, index, removeFunction))}
      </ul>
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
