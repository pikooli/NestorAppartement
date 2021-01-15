import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";

export function apartmentDisplay(apartment) {
  if (!apartment) return null;
  return (
    <li className="list-group-item " key={apartment.id}>
      <div className="row">
        <div className="col-sm-2">
          {showPicture(image.apartment, "bulding")}
        </div>
        <div className="col-sm text-dark">
          <h3>Apartment N°{apartment.number}</h3>
          {joinTextNormal("Name", apartment.name)}
          {joinTextNormal("Street", apartment.street)}
          {joinTextNormal("ZipCode", apartment.zipCode)}
          {joinTextNormal(
            "NbRooms",
            apartment.rooms ? apartment.rooms.length : 0
          )}
        </div>
      </div>
    </li>
  );
}

function displayRoom(room, index) {
  if (!room) return null;
  return (
    <li key={index} className="list-group-item">
      {joinTextNormal("Number", room.number)}
      {joinTextNormal("Area", room.area)}
      {joinTextNormal("Price", room.price)}
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
