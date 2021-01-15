import ReduxActions from "../../Redux/Actions/ReduxActions";
import { input } from "../../Utlis/Inputs";
import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";
import { searchBtn } from "../../Utlis/Btn/SearchBtn";

export function apartmentDisplay(apartment) {
  if (!apartment) return null;
  return (
    <li className="list-group-item" key={apartment.id}>
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
            {showPicture(image.apartment, "building")}
          </div>
          <div className="col-sm text-dark">
            <h3>Ap N°{apartment.number}</h3>
            {joinTextNormal(" Name", apartment.name)}
            {joinTextNormal("Street", apartment.street)}
            {joinTextNormal("ZipCode", apartment.zipCode)}
            {joinTextNormal(
              "NbRooms",
              apartment.rooms ? apartment.rooms.length : 0
            )}
          </div>
        </div>
      </a>
    </li>
  );
}

export function renderApartmentsArray(apartementArray) {
  if (Array.isArray(apartementArray) && apartementArray.length)
    return apartementArray.map((apartment) => {
      return apartmentDisplay(apartment);
    });
}

//  search input

export function searchEntry(searchValue, setSearchValue, triggerSearch) {
  return (
    <form>
      <div className="row">
        {input(searchValue, setSearchValue, "number")}
        {input(searchValue, setSearchValue, "name")}
        {input(searchValue, setSearchValue, "street")}
        {input(searchValue, setSearchValue, "zipCode")}

        {input(searchValue, setSearchValue, "nbRooms")}

        {searchBtn(triggerSearch)}
      </div>
    </form>
  );
}
