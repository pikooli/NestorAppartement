import React, { useEffect, useState } from "react";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { pagination, changePagination } from "../../Utlis/Pagination";
import { searchApartment, searchEntry } from "./SearchApartments";
import { createApartmentBtn, apartmentDisplay } from "./Display";

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

  function checkNotEndIndex(newIndex) {
    if (
      newIndex >= 0 &&
      newIndex !== index &&
      apartments &&
      apartments.length / 10 > newIndex
    )
      return true;
    return false;
  }

  function activeChangePagination(newIndex) {
    if (checkNotEndIndex(newIndex)) {
      setIndex(newIndex);
      setDisplayApartements(pagination(newIndex, apartments));
    }
  }

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
    renderApartmentsArray,
    index,
    activeChangePagination,
    checkNotEndIndex,
    setSearchValue,
    searchValue,
    searchResult,
    triggerSearch,
  };
}

export default function App() {
  const {
    renderApartmentsArray,
    index,
    activeChangePagination,
    checkNotEndIndex,
    setSearchValue,
    searchValue,
    searchResult,
    triggerSearch,
  } = useLogic();
  return (
    <div className="container">
      <h1 className="textCenter">Apartments</h1>
      {createApartmentBtn()}
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      <div className="card mb-2">
        <ul className="list-group list-group-flush">
          {renderApartmentsArray()}
        </ul>
      </div>
      {!searchResult
        ? changePagination(index, activeChangePagination, checkNotEndIndex)
        : null}
    </div>
  );
}

/* <Link to="/createRoom">CreateEditRoom</Link> */
