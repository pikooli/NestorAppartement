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
        <div className="col-sm-2">
          <img
            className="rounded img-fluid"
            src="https://100k-faces.glitch.me/random-image"
            alt="customer"
          />
        </div>
        <div className="col-sm">
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

function input(searchValue, setSearchValue, field) {
  return (
    <div className="col-sm">
      <label className="form-label">
        Client {field}
        <input
          type="text"
          className="form-control"
          placeholder={field}
          name={field}
          value={searchValue[field] ? searchValue[field] : ""}
          onChange={(e) =>
            setSearchValue((state) => {
              return { ...state, [field]: e.target.value };
            })
          }
        ></input>
      </label>
    </div>
  );
}

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row textCenter">
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
