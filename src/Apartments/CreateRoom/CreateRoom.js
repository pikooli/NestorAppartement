import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import ReduxActions from "../../Redux/Actions/ReduxActions";
import { goBackBtn, createRoomForm } from "./Display";
import { addingRoom } from "./Utils";

function useLogic() {
  const { id } = useParams();
  const [createRoomValue, setCreateRoomValue] = useState({});

  useEffect(() => {}, []);

  function submitRoom(e) {
    e.preventDefault();
    if (
      createRoomValue.number &&
      createRoomValue.area &&
      createRoomValue.price
    ) {
      addingRoom(createRoomValue, id);
    }
  }

  return { createRoomValue, setCreateRoomValue, submitRoom, id };
}

export default function App({}) {
  const { createRoomValue, setCreateRoomValue, submitRoom, id } = useLogic();
  return (
    <div className="container">
      <h1>Create Room</h1>
      {goBackBtn(id ? id : null)}
      {createRoomForm(createRoomValue, setCreateRoomValue, submitRoom)}
    </div>
  );
}
