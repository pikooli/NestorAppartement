import { input } from "../../../Utlis/Inputs";
import { showPicture } from "../../../Utlis/ShowPicture";
import { image } from "../../../Utlis/Url";
import { joinTextNormal } from "../../../Utlis/TextStyle/Normal";

export function clientsDisplay(client, clientSave, saveClient) {
  function selected(e) {
    e.preventDefault();
    saveClient(client);
  }

  if (!client) return null;

  return (
    <li
      key={client.id}
      className={`list-group-item ${
        clientSave && client.id === clientSave.id ? "border border-danger" : ""
      }`}
      onClick={(e) => selected(e)}
    >
      <div className="row">
        <div className="col-sm-2">{showPicture(image.client, "client")}</div>
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
      <a
        href={`client/${client.id}`}
        className="float-left container black"
      ></a>
    </li>
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
        {input(searchValue, setSearchValue, "firstName")}
        {input(searchValue, setSearchValue, "lastName")}
        {input(searchValue, setSearchValue, "phone")}

        {input(searchValue, setSearchValue, "birthDate")}
        {input(searchValue, setSearchValue, "nationality")}
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
