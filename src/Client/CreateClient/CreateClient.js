import React, { useEffect, useState } from "react";
import { createClientForm } from "./Display";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { modalAlert, modalAlertError } from "../../Utlis/Alert";
import { isValidEmail } from "../../Utlis/IsValidEmail";

function useLogic() {
  const [createClientValue, setCreateClientValue] = useState(null);

  useEffect(() => {}, []);

  function errorMessage() {
    if (!createClientValue || !createClientValue.firstName)
      modalAlertError("You didn't put a fistName");
    else if (!createClientValue.lastName)
      modalAlertError("You didn't put a lastName");
    else if (!createClientValue.email)
      modalAlertError("You didn't put a email");
    else if (!isValidEmail(createClientValue.email))
      modalAlertError("That not a valid email");
    else if (!createClientValue.phone)
      modalAlertError("You didn't put a phone number");
    else if (!createClientValue.nationality)
      modalAlertError("You didn't put a nationality");
    else if (!createClientValue.birthDate)
      modalAlertError("You didn't put a birthDate");
    else modalAlertError("Don't know what went wrong");
  }

  function submitForm(e) {
    e.preventDefault();
    if (
      createClientValue &&
      createClientValue.firstName &&
      createClientValue.lastName &&
      createClientValue.email &&
      isValidEmail(createClientValue.email) &&
      createClientValue.phone &&
      createClientValue.nationality &&
      createClientValue.birthDate
    )
      api.post(url.client.base, createClientValue).then((data) => {
        if (data) {
          modalAlert("Client created");
          window.location.href = "/client";
        }
      });
    else errorMessage();
  }

  return { createClientValue, setCreateClientValue, submitForm };
}

export default function App({}) {
  const { createClientValue, setCreateClientValue, submitForm } = useLogic();

  return (
    <div className="container">
      <h1 className="textCenter my-3">Create a client</h1>
      {createClientForm(createClientValue, setCreateClientValue, submitForm)}
    </div>
  );
}
