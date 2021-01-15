import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { renderBookingsDisplay, createBookingBtn } from "./Display";
import { pagination, changePagination } from "../../Utlis/Pagination";
import { createBtn } from "../../Utlis/Btn/CreateBtn";

import { searchInput } from "./SearchBooking/SearchBookingForm";
import { searchAlgorithm } from "./SearchBooking/SearchAlgorithm/SearchAlgorithm";

function useLogic() {
  const [bookings, setBookings] = useState(null);
  const [displayBookings, setDisplayBookings] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api.get(url.booking.base).then((data) => {
      if (!data) return;
      setBookings(data.bookings);
      setDisplayBookings(pagination(0, data.bookings));
    });
  }, []);

  function triggerSearch() {
    setSearchResult(searchAlgorithm(bookings, searchValue));
  }

  return {
    bookings,
    index,
    setIndex,
    displayBookings,
    setDisplayBookings,
    searchValue,
    setSearchValue,
    searchResult,
    triggerSearch,
  };
}

export default function App({}) {
  const {
    bookings,
    index,
    setIndex,
    displayBookings,
    setDisplayBookings,
    searchValue,
    setSearchValue,
    searchResult,
    triggerSearch,
  } = useLogic();
  return (
    <div className="container">
      <h1 className="text-center my-3">Bookings</h1>
      {createBtn("booking", "/createBooking")}
      {searchInput(searchValue, setSearchValue, triggerSearch)}
      {searchResult
        ? renderBookingsDisplay(searchResult)
        : renderBookingsDisplay(displayBookings)}
      {changePagination(index, setIndex, setDisplayBookings, bookings)}
    </div>
  );
}

// ;<Link to="/booking/aaaa">DetailsBooking</Link>
/* <Link to="/createBooking">CreateEditBooking</Link> */
