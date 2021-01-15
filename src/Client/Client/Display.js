import { input } from "../../Utlis/Inputs";
import { image } from "../../Utlis/Url";
import { showPicture } from "../../Utlis/ShowPicture";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";
import { searchBtn } from "../../Utlis/Btn/SearchBtn";

export function clientDisplay(client) {
  if (!client) return null;
  return (
    <li key={client.id} className="list-group-item">
      <a href={`client/${client.id}`} className="float-left container black">
        <div className="row">
          <div className="col-sm-2">{showPicture(image.client, "client")}</div>
          <div className="col-sm">
            {joinTextNormal("FirstName", client.firstName)}
            {joinTextNormal("lastName", client.lastName)}
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
      </a>
    </li>
  );
}

export function renderClientsArray(clientsArray) {
  if (clientsArray) {
    return (
      <div className="card mb-2">
        <ul className="list-group list-group-flush">
          {clientsArray.map((client) => {
            return clientDisplay(client);
          })}
        </ul>
      </div>
    );
  } else return null;
}

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row ">
        {input(searchValue, setSearchValue, "firstName")}
        {input(searchValue, setSearchValue, "lastName")}
        {input(searchValue, setSearchValue, "phone")}

        {input(searchValue, setSearchValue, "birthDate")}
        {input(searchValue, setSearchValue, "nationality")}
        {searchBtn(triggerSearch)}
      </div>
    </form>
  );
}
