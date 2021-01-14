export function createRoomBtn(id) {
  return (
    <div className="d-flex justify-content-end">
      <a className="btn btn-primary my-3 " href={`/createRoom/${id ? id : ""}`}>
        Create room
      </a>
    </div>
  );
}

export function resetBtn(resetFunction) {
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-danger my-3 " onClick={resetFunction}>
        reset
      </button>
    </div>
  );
}

export function createApartmentForm(
  createApValue,
  setName,
  setNumber,
  submitForm,
  removeRoom
) {
  return (
    <form className="row">
      <div className="col-sm-2 mb-3">
        <img
          className="rounded img-fluid"
          src="https://www.jll.fr/images/global/treant-and-insights/global-cities-why-timber-buildings.jpg.rendition/cq5dam.web.1280.1280.jpeg"
          alt="building"
        />
      </div>
      <div className="col-sm-2 mb-3">
        <label className="form-label">
          Apartment number
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="number"
            value={
              createApValue && createApValue.number ? createApValue.number : ""
            }
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </label>
      </div>
      <div className=" col-sm-2 mb-3">
        <label className="form-label">
          Apartment name
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="number"
            value={
              createApValue && createApValue.name ? createApValue.name : ""
            }
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
      </div>
      {createApValue && createApValue.rooms
        ? displayRooms(createApValue.rooms, removeRoom)
        : null}
      <button type="submit" className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>
    </form>
  );
}

function removeRoomBtn(index, removeRoom) {
  return <button onClick={(e) => removeRoom(e, index)}>x</button>;
}

function displayRoom(room, index, removeRoom) {
  if (!room) return null;
  return (
    <li key={index} className="list-group-item">
      {room.number} {room.area} {room.price} {removeRoomBtn(index, removeRoom)}
    </li>
  );
}

export function displayRooms(rooms, removeRoom) {
  if (!rooms) return null;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {rooms
          ? rooms.map((room, index) => displayRoom(room, index, removeRoom))
          : null}
      </ul>
    </div>
  );
}
