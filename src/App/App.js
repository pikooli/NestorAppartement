import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import Apartments from "../Apartments/Apartments";
import CreateEditApartment from "../Apartments/CreateEditApartment/CreateEditApartment";
import DetailsApartment from "../Apartments/DetailsApartment/DetailsApartment";
import CreateEditRoom from "../Apartments/CreateEditRoom/CreateEditRoom";
//
import Customers from "../Custormers/Customers";
import DetailsCustomer from "../Custormers/DetailsCustomer/DetailsCustomer";
import CreateEditCustomer from "../Custormers/CreateEditCustomer/CreateEditCustomer";
//
import Reservations from "../Reservations/Reservations";
import DetailsReservation from "../Reservations/DetailsReservation/DetailsReservation";
import CreateEditReservation from "../Reservations/CreateEditReservation/CreateEditReservation";

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
              <Link to="/apartments">apartments</Link>
            </li>
            <li>
              <Link to="/Customers">Customers</Link>
            </li>
            <li>
              <Link to="/Reservations">Reservations</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Apartments">
            <Apartments />
          </Route>
          <Route path="/CreateEditApartment">
            <CreateEditApartment />
          </Route>
          <Route path="/DetailsApartment">
            <DetailsApartment />
          </Route>
          <Route path="/CreateEditRoom">
            <CreateEditRoom />
          </Route>
          <Route path="/Customers">
            <Customers />
          </Route>
          <Route path="/DetailsCustomer">
            <DetailsCustomer />
          </Route>
          <Route path="/CreateEditCustomer">
            <CreateEditCustomer />
          </Route>
          <Route path="/Reservations">
            <Reservations />
          </Route>
          <Route path="/DetailsReservation">
            <DetailsReservation />
          </Route>
          <Route path="/CreateEditReservation">
            <CreateEditReservation />
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
