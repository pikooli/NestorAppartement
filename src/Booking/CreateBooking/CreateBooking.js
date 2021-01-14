import React, { useEffect, useState } from "react";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import Client from "./Client/Client";
import Room from "./Room/Rooms";
import reduxActions from "../../Redux/Actions/ReduxActions";
import { createBookingBtn } from "./Display";
import { modalAlert } from "../../Utlis/Alert";
import { createResetBtn } from "../../Utlis/ResetBtn";

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

  function reset() {
    saveClient({});
    saveRoom({});
  }

  function triggerBooking() {
    if (clientSave && clientSave.id && roomSave && roomSave.id)
      api
        .post(url.booking.base, {
          clientId: clientSave.id,
          roomId: roomSave.id,
        })
        .then((data) => {
          if (data) {
            modalAlert("Your booking have been accepted");
            reset();
          }
        });
  }
  return { clientSave, saveClient, roomSave, saveRoom, triggerBooking, reset };
}

export default function App({}) {
  const {
    clientSave,
    saveClient,
    roomSave,
    saveRoom,
    triggerBooking,
    reset,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center">Create booking</h1>
      {createBookingBtn(triggerBooking)}
      {createResetBtn(reset)}
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
