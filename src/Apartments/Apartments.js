import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
import url from "../Utlis/Url";
import api from "../Utlis/ApiRequest";

function useLogic() {
  const [data, setData] = useState(null);
  useEffect(async () => {
    api.get(url.apartment.base).then((data) => console.log(data));
  }, []);

  return { data };
}

export default function App({}) {
  const { data } = useLogic();

  return (
    <div>
      <h2>Appartments</h2>
      <Link to="/apartment/test">DetailsApartment</Link>
      <Link to="/createApartment">CreateEditApartement</Link>
      <Link to="/createRoom">CreateEditRoom</Link>
    </div>
  );
}
