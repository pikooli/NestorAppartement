import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import { clientDisplay } from "./Display";

function useLogic() {
  let { id } = useParams();
  const [client, setClient] = useState({});
  useEffect(() => {
    api.get(url.client.id(id)).then((data) => {
      if (!data) return;
      setClient(data.client);
    });
  }, []);

  return { client };
}

export default function App({}) {
  const { client } = useLogic();

  return (
    <div className="container">
      <h1 className="textCenter my-3">Details client</h1>
      {clientDisplay(client)}
    </div>
  );
}
