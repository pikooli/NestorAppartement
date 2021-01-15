import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";
import { checkIfnull } from "../../Utlis/Compare";

function displayHeader(id, booking) {
  return (
    <div>
      <p className="d-flex justify-content-end"> {id}</p>
      <p className="d-flex justify-content-end">{booking.updatedAt}</p>
    </div>
  );
}

function displayApartment(apartment) {
  return (
    <div className="col-sm ">
      <h5>Apartment</h5>
      {showPicture(image.apartment, "apartment")}
      {joinTextNormal("Number", checkIfnull(apartment.number))}
      {joinTextNormal("Name", checkIfnull(apartment.name))}
      {joinTextNormal("Street", checkIfnull(apartment.street))}
      {joinTextNormal("ZipCode", checkIfnull(apartment.zipCode))}
    </div>
  );
}

function displayRoom(room) {
  return (
    <div className="col-sm">
      <h5>Room</h5>
      {showPicture(image.room, "room")}
      {joinTextNormal("Number", checkIfnull(room.number))}
      {joinTextNormal("Area", checkIfnull(room.area))}
      {joinTextNormal("Price", checkIfnull(room.price))}
    </div>
  );
}

function displayClient(client) {
  return (
    <div className="col-sm">
      <h5>Client</h5>
      {showPicture(image.client, "client")}
      {joinTextNormal("Number", checkIfnull(client.firstName))}
      {joinTextNormal("Number", checkIfnull(client.lastName))}
      {joinTextNormal("Number", checkIfnull(client.phone))}
    </div>
  );
}

export function bookingDisplay(id, booking) {
  if (!booking) return null;
  console.log(booking);
  return (
    <div>
      {displayHeader(id, booking)}
      <div className="row ">
        {displayApartment(
          booking.room && booking.room.apartment ? booking.room.apartment : {}
        )}
        {displayRoom(booking.room ? booking.room : {})}
        {displayClient(booking.client ? booking.client : {})}
      </div>
    </div>
  );
}
