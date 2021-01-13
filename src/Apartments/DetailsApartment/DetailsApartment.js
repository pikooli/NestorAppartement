import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { apartmentDisplay, displayRooms } from "./Display";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";

function useLogic() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    api.get(url.apartment.id(id)).then((data) => {
      setApartment(data);
    });
  }, []);

  return { id, apartment };
}

export default function App({}) {
  const { id, apartment } = useLogic();

  return (
    <div className="container">
      <h1>Details Apartemnt</h1>
      <p>{id}</p>
      {apartmentDisplay(apartment)}
      <h3 className="my-3">List of Rooms</h3>
      {displayRooms(apartment)}
    </div>
  );
}
