import React, { useEffect, useState } from "react";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { pagination, changePagination } from "../../Utlis/Pagination";
import { createBtn } from "../../Utlis/Btn/CreateBtn";
import { searchApartment } from "./SearchApartments";
import {
  createApartmentBtn,
  apartmentDisplay,
  searchEntry,
  renderApartmentsArray,
} from "./Display";

function useLogic() {
  const [apartments, setApartments] = useState(null);
  const [index, setIndex] = useState(0);
  const [displayApartements, setDisplayApartements] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    api.get(url.apartment.base).then((data) => {
      if (!data) return;
      setApartments(data.apartments);
      setDisplayApartements(pagination(0, data.apartments));
    });
  }, []);

  function triggerSearch() {
    setSearchResult(searchApartment(apartments, searchValue));
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
    displayApartements,
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
    displayApartements,
    triggerSearch,
  } = useLogic();
  return (
    <div className="container">
      <h1 className="textCenter my-3">Apartments</h1>
      {createBtn("apartment", "/createApartment")}
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      <div className="card mb-2">
        <ul className="list-group list-group-flush">
          {searchResult
            ? renderApartmentsArray(searchResult)
            : renderApartmentsArray(displayApartements)}
        </ul>
      </div>
      {!searchResult
        ? changePagination(index, setIndex, setDisplayApartements, apartments)
        : null}
    </div>
  );
}

/* <Link to="/createRoom">CreateEditRoom</Link> */
