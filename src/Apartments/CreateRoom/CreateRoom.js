import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { modalAlertError } from "../../Utlis/Alert";
import { createRoomForm } from "./Display";
import { addingRoom } from "./Utils";
import { goBackBtn } from "../../Utlis/Btn/GoBackBtn";

function useLogic() {
  const { id } = useParams();
  const [createRoomValue, setCreateRoomValue] = useState({});

  useEffect(() => {}, []);

  function errorMessage() {
    if (!createRoomValue.number) modalAlertError("You didn't give a number");
    else if (!createRoomValue.area) modalAlertError("You didn't give a area");
    else if (!createRoomValue.price || createRoomValue.price <= 0)
      modalAlertError("Wrong price");
    else modalAlertError("Don't know what went wrong");
  }

  function submitRoom(e) {
    e.preventDefault();
    if (
      createRoomValue.number &&
      createRoomValue.area &&
      createRoomValue.price
    ) {
      addingRoom(createRoomValue, id);
    } else errorMessage();
  }

  return { createRoomValue, setCreateRoomValue, submitRoom, id };
}

export default function App() {
  const { createRoomValue, setCreateRoomValue, submitRoom, id } = useLogic();
  return (
    <div className="container">
      <h1 className="textCenter my-3">Create Room</h1>
      {goBackBtn(id ? `/apartment/${id}` : `/createApartment/`)}
      {createRoomForm(createRoomValue, setCreateRoomValue, submitRoom)}
    </div>
  );
}
