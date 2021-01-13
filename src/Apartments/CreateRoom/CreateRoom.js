import React, { useEffect, useState } from "react";
import createApartmentAction from "../../Redux/Actions/createApartmentAction";
import { goBackBtn, createRoomForm } from "./Display";

function useLogic() {
  const [createRoomValue, setCreateRoomValue] = useState({});
  const ApValue = createApartmentAction.getState();

  useEffect(() => {}, []);

  function submitRoom(e) {
    e.preventDefault();
    if (
      createRoomValue.number &&
      createRoomValue.area &&
      createRoomValue.price
    ) {
      createApartmentAction.addRoom(createRoomValue);
      console.log(ApValue);
      if (ApValue.apID) window.location.href = `/apartment/${ApValue.apID}`;
      else window.location.href = `/createApartment`;
    }
  }

  return { createRoomValue, setCreateRoomValue, submitRoom };
}

export default function App({}) {
  const { createRoomValue, setCreateRoomValue, submitRoom } = useLogic();

  return (
    <div className="container">
      <h1>Create Room</h1>
      {goBackBtn()}
      {createRoomForm(createRoomValue, setCreateRoomValue, submitRoom)}
    </div>
  );
}
