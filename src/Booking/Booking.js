import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

function useLogic() {
  useEffect(() => {}, []);

  return {};
}

export default function App({}) {
  const {} = useLogic();

  return (
    <div>
      <h2>Bookings</h2>;<Link to="/booking/aaaa">DetailsBooking</Link>
      <Link to="/createBooking">CreateEditBooking</Link>
    </div>
  );
}
