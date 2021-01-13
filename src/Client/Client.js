import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import url from "../Utlis/Url";
import api from "../Utlis/ApiRequest";

function useLogic() {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    api.get(url.client.base).then((data) => setClients(data));
  }, []);

  function clientsDisplay(client) {
    return (
      <div key={client.id}>
        <a href={`apartment/${client.id}`}>{client.id}</a>
        <p>
          {client.firstName} {client.lastName} {client.phone} {client.birthDate}{" "}
          {client.nationality} {client.bookings.length}
        </p>
      </div>
    );
  }

  function renderClientsArray() {
    console.log(clients);
    if (clients)
      return clients.clients.map((client) => {
        return clientsDisplay(client);
      });
    else return null;
  }
  return { renderClientsArray };
}

export default function App({}) {
  const { renderClientsArray } = useLogic();

  return (
    <div>
      <h2>Client</h2>;<Link to="/client/test">DetailsClient</Link>
      <Link to="/CreateClient">CreateEditClient</Link>
      {renderClientsArray()}
    </div>
  );
}
