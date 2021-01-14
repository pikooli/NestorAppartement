import ReduxActions from "../../Redux/Actions/ReduxActions";
import { input } from "../../Utlis/Inputs";

export function createApartmentBtn() {
  return (
    <div className="d-flex justify-content-end">
      <a
        type="button"
        className="btn btn-primary mb-3 "
        href="/createApartment"
      >
        Create Apartement
      </a>
    </div>
  );
}

export function apartmentDisplay(apartment) {
  if (!apartment) return null;
  return (
    <li className="list-group-item " key={apartment.id}>
      <a
        className="float-left container"
        href={`apartment/${apartment.id}`}
        onClick={(e) => {
          e.preventDefault();
          ReduxActions.setDetailsAp(apartment);
          window.location.href = `apartment/${apartment.id}`;
        }}
      >
        <div className="row">
          <div className="col-sm-2">
            <img
              className="rounded img-fluid"
              src="https://www.jll.fr/images/global/treant-and-insights/global-cities-why-timber-buildings.jpg.rendition/cq5dam.web.1280.1280.jpeg"
              alt="building"
            />
          </div>
          <div className="col-sm text-dark">
            <h3>Ap N°{apartment.number}</h3>
            <p>
              Apartment name : {apartment.name}
              <br />
              Apartment street : {apartment.street}
              <br />
              Apartment zipCode : {apartment.zipCode}
              <br />
              Apartment rooms : {apartment.rooms.length}
              <br />
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row">
        {input(searchValue, setSearchValue, "number")}
        {input(searchValue, setSearchValue, "name")}
        {input(searchValue, setSearchValue, "street")}
        {input(searchValue, setSearchValue, "zipCode")}

        {input(searchValue, setSearchValue, "nbRooms")}

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
