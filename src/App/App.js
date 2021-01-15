import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import Apartments from "../Apartments/Apartements/Apartments";
import CreateApartment from "../Apartments/CreateApartment/CreateApartment";
import DetailsApartment from "../Apartments/DetailsApartment/DetailsApartment";
import CreateRoom from "../Apartments/CreateRoom/CreateRoom";
//
import Client from "../Client/Client/Client";
import DetailsClient from "../Client/DetailsClient/DetailsClient";
import CreateClient from "../Client/CreateClient/CreateClient";
//
import Booking from "../Booking/Booking/Booking";
import DetailsBooking from "../Booking/DetailsBooking/DetailsBooking";
import CreateBooking from "../Booking/CreateBooking/CreateBooking";
//
import Rooms from "../Rooms/Rooms";

export default function App() {
  function navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a href="/" className="navbar-brand ">
          <img
            className="mw-100"
            src="https://www.chez-nestor.com/_nuxt/img/186473d.png"
            alt="logo of the website"
          />
        </a>
        <div className="fullsize d-flex justify-content-end me-2 ">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto ms-2">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                <i className="fas fa-home fa-2x d-flex justify-content-end me-2"></i>{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/client">
                <i className="fas fa-user-alt fa-2x d-flex  justify-content-end me-2"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/room">
                <i className="fas fa-bed fa-2x d-flex  justify-content-end me-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/booking">
                <i className="fas fa-calendar-check fa-2x d-flex  justify-content-end me-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  function footer() {
    return (
      <footer className="position-relative">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="position-absolute bottom-0 start-50 translate-middle-x"
        >
          <img
            src="https://i.pinimg.com/originals/19/39/ac/1939ace417a6eaf6f8e654d7dd597821.jpg"
            width="20px"
            height="20px"
            alt="cat"
          />
        </a>
      </footer>
    );
  }

  return (
    <Router>
      <div className="main">
        {navbar()}
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
          <Route exact path="/createRoom/:id">
            <CreateRoom />
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
          <Route exact path="/room">
            <Rooms />
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
            <Apartments />
          </Route>
        </Switch>
      </div>
      {footer()}
    </Router>
  );
}
