import { input } from "../../Utlis/Inputs";

export function createClientBtn() {
  return (
    <div className="d-flex justify-content-end">
      <a type="button" className="btn btn-primary mb-3 " href="/createClient">
        Create Client
      </a>
    </div>
  );
}

export function clientsDisplay(client) {
  if (!client) return null;
  return (
    <li key={client.id} className="list-group-item" key={client.id}>
      <a href={`client/${client.id}`} className="float-left container black">
        <div className="row">
          <div className="col-sm-2">
            <img
              className="rounded img-fluid"
              src="https://100k-faces.glitch.me/random-image"
              alt="customer"
            />
          </div>
          <div className="col-sm-2">
            <div>
              first name : {client.firstName}
              <br />
              lastName : {client.lastName} <br />
              Phone :{client.phone} <br />
              birthDate : {client.birthDate}
              <br />
              nationality : {client.nationality}
              <br /> booking : {client.bookings ? client.bookings.length : null}
            </div>
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
            return clientsDisplay(client);
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
