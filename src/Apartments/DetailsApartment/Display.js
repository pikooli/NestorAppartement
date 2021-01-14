import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";
export function createRoomBtn(id) {
  return (
    <div className="d-flex justify-content-end">
      <a className="btn btn-primary my-3 " href={`/createRoom/${id ? id : ""}`}>
        Create room
      </a>
    </div>
  );
}

export function apartmentDisplay(apartment) {
  if (!apartment) return null;
  return (
    <li className="list-group-item " key={apartment.id}>
      <a className="float-left container" href={`apartment/${apartment.id}`}>
        <div className="row">
          <div className="col-sm-2">
            {showPicture(image.apartment, "bulding")}
          </div>
          <div className="col-sm text-dark">
            <h3>Apartment N°{apartment.number}</h3>
            <p>
              Apartment name : {apartment.name}
              <br />
              Apartment street : {apartment.street}
              <br />
              Apartment zipCode : {apartment.zipCode}
              <br />
              Number of rooms :{" "}
              {apartment.rooms ? apartment.rooms.length : null}
              <br />
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}

function displayRoom(room, index) {
  if (!room) return null;
  return (
    <li key={index} className="list-group-item">
      number {room.number} area {room.area} price {room.price}{" "}
    </li>
  );
}

export function displayRooms(apartment) {
  if (!apartment || !apartment.rooms) return null;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {apartment.rooms.map((room, index) => displayRoom(room, index))}
      </ul>
    </div>
  );
}
