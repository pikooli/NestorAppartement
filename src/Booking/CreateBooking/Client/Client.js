import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { pagination, changePagination } from "../../../Utlis/Pagination";
import url from "../../../Utlis/Url";
import api from "../../../Utlis/ApiRequest";
import { renderClientsArray, searchEntry } from "./Display";
import { searchClient } from "./SearchClient";
import reduxActions from "../../../Redux/Actions/ReduxActions";

function useLogic() {
  const [clients, setClients] = useState(null);
  const [displayClients, setDisplayClients] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api.get(url.client.base).then((data) => {
      if (!data) return;
      setClients(data.clients);
      setDisplayClients(pagination(0, data.clients));
    });
  }, []);

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

export default function App({ clientSave, saveClient }) {
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
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      {searchResult
        ? renderClientsArray(searchResult, clientSave, saveClient)
        : renderClientsArray(displayClients, clientSave, saveClient)}
      {!searchResult
        ? changePagination(index, setIndex, setDisplayClients, clients)
        : null}
    </div>
  );
}
