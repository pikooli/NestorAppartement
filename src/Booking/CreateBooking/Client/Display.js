import { input } from "../../../Utlis/Inputs";
import { showPicture } from "../../../Utlis/ShowPicture";
import { image } from "../../../Utlis/Url";
import { joinTextNormal } from "../../../Utlis/TextStyle/Normal";

export function clientsDisplay(client, clientSave, saveClient) {
  function selected(e) {
    e.preventDefault();
    if (saveClient) saveClient(client);
  }

  if (!client) return null;

  return (
    <li
      key={client.id}
      className={`list-group-item ${
        clientSave && client.id === clientSave.id
          ? "border border-2 border-success"
          : ""
      }`}
      onClick={(e) => selected(e)}
    >
      <div className="row">
        <div className="col-sm-2 ">{showPicture(image.client, "client")}</div>
        <div className="col-sm">
          {joinTextNormal("FirstName", client.firstName)}
          {joinTextNormal("LastName", client.lastName)}
          {joinTextNormal("Phone", client.phone)}
          {joinTextNormal("Nationality", client.nationality)}
          {joinTextNormal(
            "NbBooking",
            client.bookings ? client.bookings.length : 0
          )}
        </div>
      </div>
    </li>
  );
}

export function clientsThumbnail(client) {
  if (!client) return null;

  return (
    <div className="row ">
      <div className="col-sm-3">{showPicture(image.client, "client")}</div>
      <div className="col-sm">
        {joinTextNormal("FirstName", client.firstName)}
        {joinTextNormal("LastName", client.lastName)}
        {joinTextNormal("Phone", client.phone)}
        {joinTextNormal("Nationality", client.nationality)}
        {joinTextNormal(
          "NbBooking",
          client.bookings ? client.bookings.length : 0
        )}
      </div>
    </div>
  );
}

export function renderClientsArray(clientsArray, clientSave, saveClient) {
  if (clientsArray) {
    return (
      <div className="card mb-2">
        <ul className="list-group list-group-flush">
          {clientsArray.map((client) => {
            return clientsDisplay(client, clientSave, saveClient);
          })}
        </ul>
      </div>
    );
  } else return null;
}

//  seach input form

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row ">
        {input(searchValue, setSearchValue, "firstName", true)}
        {input(searchValue, setSearchValue, "lastName", true)}
        {input(searchValue, setSearchValue, "phone", true)}

        {input(searchValue, setSearchValue, "birthDate", true)}
        {input(searchValue, setSearchValue, "nationality", true)}
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
