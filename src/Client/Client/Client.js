import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { pagination, changePagination } from "../../Utlis/Pagination";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { clientsDisplay, createClientBtn, searchEntry } from "./Display";
import { searchClient } from "./SearchClient";

function useLogic() {
  const [clients, setClients] = useState(null);
  const [displayClients, setDisplayClients] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api.get(url.client.base).then((data) => {
      setClients(data.clients);
      setDisplayClients(pagination(0, data.clients));
    });
  }, []);

  function renderClientsArray(clientsArray) {
    if (clientsArray) {
      return (
        <div className="card mb-2">
          <ul className="list-group list-group-flush">
            {clientsArray.map((client) => {
              return clientsDisplay(client);
            })}
          </ul>
        </div>
      );
    } else return null;
  }

  function triggerSearch() {
    setSearchResult(searchClient(clients, searchValue));
  }

  return {
    clients,
    renderClientsArray,
    index,
    setIndex,
    displayClients,
    setDisplayClients,
    searchValue,
    searchResult,
    setSearchValue,
    setSearchResult,
    triggerSearch,
  };
}

export default function App({}) {
  const {
    clients,
    renderClientsArray,
    index,
    setIndex,
    displayClients,
    setDisplayClients,
    searchValue,
    searchResult,
    setSearchValue,
    triggerSearch,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="textCenter my-3">Client</h1>
      {createClientBtn()}
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      {!searchResult
        ? changePagination(index, setIndex, setDisplayClients, clients)
        : null}
      {searchResult
        ? renderClientsArray(searchResult)
        : renderClientsArray(displayClients)}
    </div>
  );
}

// ;<Link to="/client/test">DetailsClient</Link>
//       <Link to="/CreateClient">CreateEditClient</Link>
