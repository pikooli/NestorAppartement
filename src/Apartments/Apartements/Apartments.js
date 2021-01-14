import React, { useEffect, useState } from "react";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { pagination, changePagination } from "../../Utlis/Pagination";
import { searchApartment } from "./SearchApartments";
import { createApartmentBtn, apartmentDisplay, searchEntry } from "./Display";

function useLogic() {
  const [apartments, setApartments] = useState(null);
  const [index, setIndex] = useState(0);
  const [displayApartements, setDisplayApartements] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    api.get(url.apartment.base).then((data) => {
      setApartments(data.apartments);
      setDisplayApartements(pagination(0, data.apartments));
    });
  }, []);

  function renderApartmentsArray() {
    if (searchResult)
      return searchResult.map((apartment) => {
        return apartmentDisplay(apartment);
      });
    else if (displayApartements)
      return displayApartements.map((apartment) => {
        return apartmentDisplay(apartment);
      });
    else return null;
  }

  function triggerSearch() {
    setSearchResult(searchApartment(apartments, searchValue));
    setSearchValue({});
  }

  return {
    apartments,
    renderApartmentsArray,
    index,
    setIndex,
    setDisplayApartements,
    setSearchValue,
    searchValue,
    searchResult,
    triggerSearch,
  };
}

export default function App() {
  const {
    apartments,
    renderApartmentsArray,
    index,
    setIndex,
    setDisplayApartements,
    setSearchValue,
    searchValue,
    searchResult,
    triggerSearch,
  } = useLogic();
  return (
    <div className="container">
      <h1 className="textCenter my-3">Apartments</h1>
      {createApartmentBtn()}
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      {!searchResult
        ? changePagination(index, setIndex, setDisplayApartements, apartments)
        : null}
      <div className="card mb-2">
        <ul className="list-group list-group-flush">
          {renderApartmentsArray()}
        </ul>
      </div>
    </div>
  );
}

/* <Link to="/createRoom">CreateEditRoom</Link> */
