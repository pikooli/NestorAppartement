import React, { useEffect, useState } from "react";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import Client from "./Client/Client";
import Room from "./Room/Rooms";
import reduxActions from "../../Redux/Actions/ReduxActions";
import { createBookingBtn } from "./Display";
import { modalAlert } from "../../Utlis/Alert";
import { createResetBtn } from "../../Utlis/Btn/ResetBtn";
import { clientsThumbnail } from "./Client/Display";
import { roomThumbnail } from "./Room/Display";

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

export default function App() {
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
      <h1 className="text-center my-3">Create booking</h1>
      <div className="row d-flex justify-content-end minHeigth-150">
        <div className="col-sm-5">
          {roomSave.id ? roomThumbnail(roomSave, null, null) : null}
        </div>
        <div className="col-sm-5">
          {clientSave.id ? clientsThumbnail(clientSave, null, null) : null}
        </div>
        <div className="col-sm-2 d-flex justify-content-end">
          <span className="mx-5">{createBookingBtn(triggerBooking)}</span>
          <span>{createResetBtn(reset)}</span>
        </div>
      </div>
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
