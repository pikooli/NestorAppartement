import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { apartmentDisplay, displayRooms, createRoomBtn } from "./Display";
import ReduxActions from "../../Redux/Actions/ReduxActions";

function useLogic() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    setApartment(ReduxActions.getDetailsAp());
  }, []);

  return { id, apartment };
}

export default function App({}) {
  const { id, apartment } = useLogic();

  return (
    <div className="container">
      <h1>Details Apartemnt</h1>
      <p>{id}</p>
      {createRoomBtn(id)}
      {apartmentDisplay(apartment)}
      <h3 className="my-3">List of Rooms</h3>
      {displayRooms(apartment)}
    </div>
  );
}
