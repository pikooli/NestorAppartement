import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";

function displayHeader(booking) {
  return (
    <div>
      <h5 className="d-flex justify-content-end"> {booking.id}</h5>
      <span className="d-flex justify-content-end">{booking.updatedAt}</span>
    </div>
  );
}

function displayApartment(booking) {
  if (!booking.room || !booking.room.apartment)
    return <div className="col-sm-4 mb-3"></div>;
  return (
    <div className="col-sm-4 mb-3">
      <div className="row">
        <div className="col-sm">{showPicture(image.apartment, "bulding")}</div>
        <div className="col-sm ">
          <h5>Apartment</h5>
          {joinTextNormal("Number", booking.room.apartment.number)}
          {joinTextNormal("Name", booking.room.apartment.name)}
          {joinTextNormal("Street", booking.room.apartment.street)}
          {joinTextNormal("zipCode", booking.room.apartment.zipCode)}
        </div>
      </div>
    </div>
  );
}

function displayRoom(booking) {
  if (!booking.room) return <div className="col-sm-4 mb-3"></div>;
  return (
    <div className="col-sm-4 mb-3">
      <div className="row">
        <div className="col-sm">{showPicture(image.room, "room")}</div>
        <div className="col-sm ">
          <h5>Room</h5>
          {joinTextNormal("Number", booking.room.number)}
          {joinTextNormal("Area", booking.room.area)}
          {joinTextNormal("Price", booking.room.price)}
        </div>
      </div>
    </div>
  );
}

function displayClient(booking) {
  if (!booking.client) return <div className="col-sm-4 mb-3"></div>;
  return (
    <div className="col-sm-4 mb-3">
      <div className="row">
        <div className="col-sm">{showPicture(image.client, "client")}</div>
        <div className="col-sm ">
          <h5>Client</h5>
          {joinTextNormal("Firstname", booking.client.firstName)}
          {joinTextNormal("LastName", booking.client.lastName)}
          {joinTextNormal("Price", booking.client.phone)}
        </div>
      </div>
    </div>
  );
}

function displayBooking(booking) {
  if (!booking) return null;
  return (
    <div key={booking.id} className="list-group-item ">
      <a href={`booking/${booking.id}`} className="black">
        {displayHeader(booking)}
        <div className="row mt-3">
          {displayApartment(booking)}
          {displayRoom(booking)}
          {displayClient(booking)}
        </div>
      </a>
    </div>
  );
}

export function renderBookingsDisplay(bookings) {
  if (!bookings) return null;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {bookings.map((booking) => {
          return displayBooking(booking);
        })}
      </ul>
    </div>
  );
}
