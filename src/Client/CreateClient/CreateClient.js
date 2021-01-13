import React, { useEffect, useState } from "react";
import { createClientForm } from "./Display";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { modalAlert } from "../../Utlis/Alert";
import { isValidEmail } from "../../Utlis/IsValidEmail";

function useLogic() {
  const [createClientValue, setCreateClientValue] = useState(null);

  useEffect(() => {}, []);

  function errorMessage() {
    if (!createClientValue || !createClientValue.firstName)
      modalAlert("You didn't put a fistName");
    else if (!createClientValue.lastName)
      modalAlert("You didn't put a lastName");
    else if (!createClientValue.email) modalAlert("You didn't put a email");
    else if (!isValidEmail(createClientValue.email))
      modalAlert("That not a valid email");
    else if (!createClientValue.phone)
      modalAlert("You didn't put a phone number");
    else if (!createClientValue.nationality)
      modalAlert("You didn't put a nationality");
    else if (!createClientValue.birthDate)
      modalAlert("You didn't put a birthDate");
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
        } else modalAlert("Something went wrong try again please");
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
