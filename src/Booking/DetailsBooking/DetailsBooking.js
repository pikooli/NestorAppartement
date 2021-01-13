import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { bookingDisplay } from "./Display";

function useLogic() {
  let { id } = useParams();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    api.get(url.booking.id(id)).then((data) => setBooking(data.booking));
  }, []);

  return { booking };
}

export default function App({}) {
  const { booking } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center my-3">Details booking</h1>
      {bookingDisplay(booking)}
    </div>
  );
}
