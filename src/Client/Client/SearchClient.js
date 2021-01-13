export function searchClient(clients, searchValue) {
  let retArray = [];
  if (
    !searchValue.firstName &&
    !searchValue.lastName &&
    !searchValue.phone &&
    !searchValue.birthDate &&
    !searchValue.nationality
  )
    return null;

  if (searchValue.firstName) {
    console.log(searchValue.firstName);
    clients.forEach((client) => {
      if (client.firstName === searchValue.firstName) retArray.push(client);
    });
  }

  if (searchValue.lastName) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.lastName === searchValue.lastName ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.lastName === searchValue.lastName) retArray.push(client);
      });
  }

  if (searchValue.phone) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.phone === searchValue.phone ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.nationality === searchValue.nationality)
          retArray.push(client);
      });
  }

  if (searchValue.birthDate) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.birthDate === searchValue.birthDate ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.birthDate === searchValue.birthDate) retArray.push(client);
      });
  }

  if (searchValue.nationality) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.nationality === searchValue.nationality ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.nationality === searchValue.nationality)
          retArray.push(client);
      });
  }

  return retArray;
}

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row textCenter">
        <div className="col-sm">
          <label className="form-label">
            Client firstName
            <input
              type="text"
              className="form-control"
              placeholder="FirstName"
              name="firstName"
              value={searchValue.firstName ? searchValue.firstName : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, firstName: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
        <div className="col-sm">
          <label className="form-label">
            Client lastName
            <input
              type="text"
              className="form-control"
              placeholder="LastName"
              name="lastName"
              value={searchValue.lastName ? searchValue.lastName : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, lastName: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
        <div className="col-sm">
          <label className="form-label">
            Client phone
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="form-control"
              value={searchValue.phone ? searchValue.phone : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, phone: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
        <div className="col-sm">
          <label className="form-label">
            Client birthDate
            <input
              type="text"
              placeholder="BirthDate"
              name="birthDate"
              className="form-control"
              value={searchValue.birthDate ? searchValue.birthDate : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, birthDate: e.target.value };
                })
              }
            ></input>
          </label>
        </div>

        <div className="col-sm">
          <label className="form-label">
            Client nationality
            <input
              type="text"
              placeholder="Nationality"
              name="nationality"
              className="form-control"
              value={searchValue.nationality ? searchValue.nationality : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, nationality: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
      </div>
      <div>
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
