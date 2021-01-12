import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import Apartments from "../Apartments/Apartments";
import CreateApartment from "../Apartments/CreateApartment/CreateApartment";
import DetailsApartment from "../Apartments/DetailsApartment/DetailsApartment";
import CreateRoom from "../Apartments/CreateRoom/CreateRoom";
//
import Client from "../Client/Client";
import DetailsClient from "../Client/DetailsClient/DetailsClient";
import CreateClient from "../Client/CreateClient/CreateClient";
//
import Booking from "../Booking/Booking";
import DetailsBooking from "../Booking/DetailsBooking/DetailsBooking";
import CreateBooking from "../Booking/CreateBooking/CreateBooking";

import Cookies from "js-cookie";

export default function App() {
  Cookies.set("test", "test");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apartment">apartment</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/apartment">
            <Apartments />
          </Route>
          <Route exact path="/apartment/:id">
            <DetailsApartment />
          </Route>
          <Route path="/createApartment/">
            <CreateApartment />
          </Route>
          <Route exact path="/createRoom/">
            <CreateRoom />
          </Route>
          <Route exact path="/client">
            <Client />
          </Route>
          <Route exact path="/client/:id">
            <DetailsClient />
          </Route>
          <Route exact path="/createClient">
            <CreateClient />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/booking/:id">
            <DetailsBooking />
          </Route>
          <Route exact path="/createBooking">
            <CreateBooking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
