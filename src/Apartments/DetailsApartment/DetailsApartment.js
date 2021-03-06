import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apartmentDisplay, displayRooms } from "./Display";
import ReduxActions from "../../Redux/Actions/ReduxActions";
import { createBtn } from "../../Utlis/Btn/CreateBtn";

function useLogic() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    setApartment(ReduxActions.getDetailsAp());
  }, []);

  return { id, apartment };
}

export default function App() {
  const { id, apartment } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center my-3">Details Apartemnt</h1>
      {createBtn("room", `/createRoom/${id}`)}
      <span className="d-flex justify-content-end">{id}</span>
      {apartmentDisplay(apartment)}
      <h3 className="my-3">List of Rooms</h3>
      <div className="mb-2">{displayRooms(apartment)}</div>
    </div>
  );
}
