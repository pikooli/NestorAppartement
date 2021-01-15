import { image } from "../../Utlis/Url";
import { showPicture } from "../../Utlis/ShowPicture";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";

export function clientDisplay(client) {
  if (!client) return null;
  return (
    <li key={client.id} className="list-group-item my-5">
      <div className="float-left container black">
        <div className="row">
          <div className="col-sm-2">{showPicture(image.client, "client")}</div>
          <div className="col-sm">
            {joinTextNormal("FirstName", client.firstName)}
            {joinTextNormal("LastName", client.lastName)}
            {joinTextNormal("Phone", client.phone)}
            {joinTextNormal("BirthDate", client.birthDate)}
            {joinTextNormal("Nationality", client.nationality)}
            {joinTextNormal(
              "Booked room number",
              client.bookings && client.bookings[0] && client.bookings[0].room
                ? client.bookings[0].room.number
                : ""
            )}
            {joinTextNormal(
              "Booked room area",
              client.bookings && client.bookings[0] && client.bookings[0].room
                ? client.bookings[0].room.area
                : ""
            )}
            {joinTextNormal(
              "Booked room price",
              client.bookings && client.bookings[0] && client.bookings[0].room
                ? client.bookings[0].room.price
                : ""
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
