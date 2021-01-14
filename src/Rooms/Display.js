import url from "../Utlis/Url";
import api from "../Utlis/ApiRequest";
import { modalAlert, modalAlertError } from "../Utlis/Alert";

function deleteRoomBtn(room, index, setArray) {
  function deleteRoom() {
    api.delete(url.room.id(room.id)).then((data) => {
      if (!data) return modalAlertError();
      setArray((rooms) => {
        let newRooms = rooms.map((room, key) => {
          if (key === index) return null;
          return room;
        });
        return newRooms;
      });
    });
  }
  return (
    <button className="btn btn-primary " onClick={deleteRoom}>
      X
    </button>
  );
}

function displayRoom(room, index, setArray) {
  if (!room) return null;
  return (
    <li key={index} className="list-group-item">
      number {room.number} area {room.area} price {room.price}{" "}
      {deleteRoomBtn(room, index, setArray)}
    </li>
  );
}

export function displayRooms(rooms, setArray) {
  if (!rooms) return null;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {rooms.map((room, index) => displayRoom(room, index, setArray))}
      </ul>
    </div>
  );
}

function input(searchValue, setSearchValue, field) {
  return (
    <div className="col-sm">
      <label className="form-label">
        Room {field}
        <input
          type="text"
          className="form-control"
          placeholder={field}
          name={field}
          value={searchValue[field] ? searchValue[field] : ""}
          onChange={(e) =>
            setSearchValue((state) => {
              return { ...state, [field]: e.target.value };
            })
          }
        ></input>
      </label>
    </div>
  );
}

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row">
        {input(searchValue, setSearchValue, "number")}
        {input(searchValue, setSearchValue, "area")}
        {input(searchValue, setSearchValue, "price")}

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
