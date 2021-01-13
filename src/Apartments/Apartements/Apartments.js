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
    if (displayApartements)
      return displayApartements.map((apartment) => {
        return apartmentDisplay(apartment);
      });
    else return null;
  }

  return {
    renderApartmentsArray,
    index,
    activeChangePagination,
    checkNotEndIndex,
    setSearchValue,
  };
}

export default function App() {
  const {
    renderApartmentsArray,
    index,
    activeChangePagination,
    checkNotEndIndex,
    setSearchValue,
  } = useLogic();
  return (
    <div className="container">
      <h2 className="textCenter">Apartments</h2>
      {createApartmentBtn()}
      {searchEntry(setSearchValue)}
      <div className="card ">
        <ul className="list-group list-group-flush">
          {renderApartmentsArray()}
        </ul>
      </div>
      {changePagination(index, activeChangePagination, checkNotEndIndex)}
    </div>
  );
}

/* <Link to="/createRoom">CreateEditRoom</Link> */
