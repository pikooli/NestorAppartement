import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import url from "../Utlis/Url";
import api from "../Utlis/ApiRequest";

function useLogic() {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    api.get(url.booking.base).then((data) => setBookings(data));
  }, []);

  /* {booking.room} */

  function bookingsDisplay(booking) {
    return (
      <div key={booking.id}>
        <a href={`booking/${booking.id}`}>{booking.id}</a>
        <p>{booking.updatedAt}</p>
        <p>
          {booking.client.firstName} {booking.client.lastName}{" "}
          {booking.client.phone}
        </p>
      </div>
    );
  }

  function renderBookingsArray() {
    console.log(bookings);
    if (bookings)
      return bookings.bookings.map((booking) => {
        return bookingsDisplay(booking);
      });
    else return null;
  }
  return { renderBookingsArray };
}

export default function App({}) {
  const { renderBookingsArray } = useLogic();

  return (
    <div>
      <h2>Bookings</h2>;<Link to="/booking/aaaa">DetailsBooking</Link>
      <Link to="/createBooking">CreateEditBooking</Link>
      {renderBookingsArray()}
    </div>
  );
}
