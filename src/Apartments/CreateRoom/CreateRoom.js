import React, { useEffect, useState } from "react";
import ReduxActions from "../../Redux/Actions/ReduxActions";
import { goBackBtn, createRoomForm } from "./Display";

function useLogic() {
  const [createRoomValue, setCreateRoomValue] = useState({});
  const ApValue = ReduxActions.getState();

  useEffect(() => {}, []);

  function submitRoom(e) {
    e.preventDefault();
    if (
      createRoomValue.number &&
      createRoomValue.area &&
      createRoomValue.price
    ) {
      ReduxActions.addRoom(createRoomValue);

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
