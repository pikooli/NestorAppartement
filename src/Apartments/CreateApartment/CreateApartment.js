import React, { useEffect, useState } from "react";
import { createApartmentForm } from "./Display";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { createResetBtn } from "../../Utlis/Btn/ResetBtn";
import { modalAlert, modalAlertError } from "../../Utlis/Alert";
import ReduxActions from "../../Redux/Actions/ReduxActions";
import { createBtn } from "../../Utlis/Btn/CreateBtn";

function useLogic() {
  const [createApValue, setCreateApValue] = useState(ReduxActions.getAp());
  useEffect(() => {}, []);

  function errorMessage() {
    if (!createApValue.number) modalAlertError("You didn't give a number");
    else if (!createApValue.name) modalAlertError("You didn't give a name");
    else if (createApValue.rooms.length <= 0)
      modalAlertError("It should have at least one room");
    else modalAlertError("Don't know what went wrong");
  }

  function submitForm(e) {
    e.preventDefault();
    if (
      createApValue.rooms &&
      createApValue.rooms.length > 0 &&
      createApValue.name &&
      createApValue.number
    )
      api.post(url.apartment.base, createApValue).then((data) => {
        if (data) {
          resetFunction();
          modalAlert("Your apartment have been created");
          window.location.href = "/";
        }
      });
    else errorMessage();
  }

  function removeRoom(e, index) {
    e.preventDefault();
    setCreateApValue((val) => {
      let newObj = {
        ...val,
        rooms: val.rooms.map((room, key) => {
          return index !== key ? room : null;
        }),
      };
      ReduxActions.setAp(newObj);
      return newObj;
    });
  }

  function setName(name) {
    setCreateApValue((val) => {
      ReduxActions.setAp({ ...val, name: name });

      return { ...val, name: name };
    });
  }

  function setNumber(number) {
    setCreateApValue((val) => {
      ReduxActions.setAp({ ...val, number: number });
      return { ...val, number: number };
    });
  }

  function resetFunction() {
    ReduxActions.deleteAp();
    setCreateApValue({});
  }

  return {
    createApValue,
    setName,
    setNumber,
    submitForm,
    removeRoom,
    resetFunction,
  };
}

export default function App() {
  const {
    createApValue,
    setName,
    setNumber,
    submitForm,
    removeRoom,
    resetFunction,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="textCenter my-3"> Create apartment</h1>
      {createBtn("room", "/createRoom/")}
      {createApartmentForm(
        createApValue,
        setName,
        setNumber,
        submitForm,
        removeRoom
      )}
      <div className="d-flex justify-content-end">
        {createResetBtn(resetFunction)}
      </div>
    </div>
  );
}
