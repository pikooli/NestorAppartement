import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";

function displayHeader(booking) {
  return (
    <div>
      <span className="d-flex justify-content-end">{booking.updatedAt}</span>
    </div>
  );
}

function displayApartment(booking) {
  return (
    <div className="col-sm-4 mb-3">
      {showPicture(image.apartment, "building")}
      <h5>Apartment</h5>
      {booking.room.apartment.number} {booking.room.apartment.name}{" "}
      {booking.room.apartment.street} {booking.room.apartment.zipCode}
    </div>
  );
}

function displayRoom(booking) {
  return (
    <div className="col-sm-4 mb-3">
      {showPicture(image.room, "room")}
      <h5>Room</h5>
      {booking.room.number} {booking.room.area} {booking.room.price}
    </div>
  );
}

function displayClient(booking) {
  return (
    <div className="col-sm-4 mb-3">
      {showPicture(image.client, "client")}
      <h5>Client</h5>
      {booking.client.firstName} {booking.client.lastName}{" "}
      {booking.client.phone}
    </div>
  );
}

export function bookingDisplay(booking) {
  if (!booking) return null;
  return (
    <div key={booking.id} className="list-group-item ">
      <a href={`booking/${booking.id}`} className="black">
        {displayHeader(booking)}
        <div className="row">
          {displayApartment(booking)}
          {displayRoom(booking)}
          {displayClient(booking)}
        </div>
      </a>
    </div>
  );
}
