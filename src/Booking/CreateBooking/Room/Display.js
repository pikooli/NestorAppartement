import { input } from "../../../Utlis/Inputs";
import { showPicture } from "../../../Utlis/ShowPicture";
import { image } from "../../../Utlis/Url";
import { joinTextNormal } from "../../../Utlis/TextStyle/Normal";

export function displayRoom(room, roomSave, saveRoom) {
  function selected(e) {
    e.preventDefault();
    if (saveRoom) saveRoom(room);
  }

  if (!room) return null;
  return (
    <li
      key={room.id}
      className={`list-group-item ${
        roomSave && room.id === roomSave.id
          ? "border border-2 border-success"
          : ""
      }`}
      onClick={selected}
    >
      <div className="row">
        <div className="col-sm-3">{showPicture(image.room, "room")}</div>
        <div className="col-sm">
          {joinTextNormal("Number", room.number)}
          {joinTextNormal("Area", room.area)}
          {joinTextNormal("Price", room.price)}
        </div>
      </div>
    </li>
  );
}

export function roomThumbnail(room) {
  if (!room) return null;
  return (
    <div className="row ">
      <div className="col-sm-3">{showPicture(image.room, "room")}</div>
      <div className="col-sm">
        {joinTextNormal("Number", room.number)}
        {joinTextNormal("Area", room.area)}
        {joinTextNormal("Price", room.price)}
      </div>
    </div>
  );
}

export function displayRooms(rooms, roomSave, saveRoom) {
  if (!rooms) return null;
  return (
    <div className="card mb-3">
      <ul className="list-group list-group-flush">
        {rooms.map((room) => displayRoom(room, roomSave, saveRoom))}
      </ul>
    </div>
  );
}

//  search field

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row">
        {input(searchValue, setSearchValue, "number", true)}
        {input(searchValue, setSearchValue, "area", true)}
        {input(searchValue, setSearchValue, "price", true)}
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
      </div>
    </form>
  );
}
