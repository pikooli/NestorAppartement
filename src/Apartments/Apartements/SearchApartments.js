export function searchApartment(apartements, searchValue) {
  let retArray = [];

  if (
    !searchValue.numb &&
    !searchValue.name &&
    !searchValue.nbRooms &&
    !searchValue.street &&
    !searchValue.zipCode
  )
    return null;

  if (searchValue.numb) {
    apartements.forEach((apartement) => {
      if (apartement.number === searchValue.numb) retArray.push(apartement);
    });
    return retArray;
  } else if (searchValue.name) {
    apartements.forEach((apartement) => {
      if (apartement.name === searchValue.name) retArray.push(apartement);
    });
    return retArray;
  }
  if (searchValue.nbRooms) {
    apartements.forEach((apartement) => {
      if (apartement.rooms.length === Number(searchValue.nbRooms))
        retArray.push(apartement);
    });
  }

  if (searchValue.street) {
    if (retArray.length)
      retArray = retArray.map((apartement) => {
        return apartement.street === searchValue.street ? apartement : null;
      });
    else
      apartements.forEach((apartement) => {
        if (apartement.street === searchValue.street) retArray.push(apartement);
      });
  }

  if (searchValue.zipCode) {
    if (retArray.length)
      retArray = retArray.map((apartement) => {
        return apartement.zipCode === searchValue.zipCode ? apartement : null;
      });
    else
      apartements.forEach((apartement) => {
        if (apartement.zipCode === searchValue.zipCode)
          retArray.push(apartement);
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
            Apartment number
            <input
              type="text"
              className="form-control"
              placeholder="Number"
              name="numb"
              value={searchValue.numb ? searchValue.numb : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, numb: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
        <div className="col-sm">
          <label className="form-label">
            Apartment name
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={searchValue.name ? searchValue.name : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, name: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
        <div className="col-sm">
          <label className="form-label">
            Apartment street
            <input
              type="text"
              placeholder="Street"
              name="street"
              className="form-control"
              value={searchValue.street ? searchValue.street : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, street: e.target.value };
                })
              }
            ></input>
          </label>
        </div>
        <div className="col-sm">
          <label className="form-label">
            Apartment zipCode
            <input
              type="text"
              placeholder="ZipCode"
              name="zipCode"
              className="form-control"
              value={searchValue.zipCode ? searchValue.zipCode : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, zipCode: e.target.value };
                })
              }
            ></input>
          </label>
        </div>

        <div className="col-sm">
          <label className="form-label">
            Apartment nbRooms
            <input
              type="number"
              placeholder="NbRooms"
              name="nbRooms"
              className="form-control"
              value={searchValue.nbRooms ? searchValue.nbRooms : ""}
              onChange={(e) =>
                setSearchValue((state) => {
                  return { ...state, nbRooms: e.target.value };
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
