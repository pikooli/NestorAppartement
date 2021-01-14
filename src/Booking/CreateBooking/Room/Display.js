function displayRoom(room, roomSave, saveRoom) {
  function selected(e) {
    e.preventDefault();
    saveRoom(room);
  }

  if (!room) return null;
  return (
    <li
      key={room.id}
      className={`list-group-item ${
        roomSave && room.id === roomSave.id ? "border border-danger" : ""
      }`}
      onClick={selected}
    >
      number {room.number} area {room.area} price {room.price}{" "}
    </li>
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
