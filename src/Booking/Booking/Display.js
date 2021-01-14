import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";

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
          ap number : {booking.room.apartment.number} <br />
          ap name : {booking.room.apartment.name} <br />
          ap street : {booking.room.apartment.street} <br />
          ap zipcode : {booking.room.apartment.zipCode}
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
          room number : {booking.room.number} <br />
          room area : {booking.room.area} <br />
          room price : {booking.room.price}
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
          client firstname : {booking.client.firstName} <br />
          client lastName : {booking.client.lastName} <br />
          client phone : {booking.client.phone}
        </div>
      </div>
    </div>
  );
}

function bookingDisplay(booking) {
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
          return bookingDisplay(booking);
        })}
      </ul>
    </div>
  );
}

// btn create booking

export function createBookingBtn() {
  return (
    <div className="d-flex justify-content-end">
      <a type="button" className="btn btn-primary mb-3 " href="/createBooking">
        Create Booking
      </a>
    </div>
  );
}
