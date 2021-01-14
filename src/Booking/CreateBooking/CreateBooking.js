import React, { useEffect, useState } from "react";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import Client from "./Client/Client";
import Room from "./Room/Rooms";
import reduxActions from "../../Redux/Actions/ReduxActions";
import { createBookingBtn } from "./Display";

function useLogic() {
  useEffect(() => {}, []);
  const [roomSave, setRoomSave] = useState(reduxActions.getRoom());
  const [clientSave, setClientSave] = useState(reduxActions.getClient());

  function saveClient(client) {
    setClientSave(client);
    reduxActions.setClient(client);
  }

  function saveRoom(room) {
    setRoomSave(room);
    reduxActions.setRoom(room);
  }

  function triggerSave() {
    if (clientSave && clientSave.id && roomSave && roomSave.id)
      api
        .post(url.booking.base, {
          clientId: clientSave.id,
          roomId: roomSave.id,
        })
        .then((data) => console.log(data));
  }
  return { clientSave, saveClient, roomSave, saveRoom, triggerSave };
}

export default function App({}) {
  const {
    clientSave,
    saveClient,
    roomSave,
    saveRoom,
    triggerSave,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center">Create booking</h1>
      {createBookingBtn(triggerSave)}
      <div className="row">
        <div className="col-sm-6">
          <Room roomSave={roomSave} saveRoom={saveRoom} />
        </div>
        <div className="col-sm-6">
          <Client clientSave={clientSave} saveClient={saveClient} />
        </div>
      </div>
    </div>
  );
}
