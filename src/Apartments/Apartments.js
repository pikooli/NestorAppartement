import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

function useLogic() {
  useEffect(() => {}, []);
  return {};
}

export default function App({}) {
  const {} = useLogic();

  return (
    <div>
      <h2>Appartments</h2>
      <Link to="/CreateEditApartment">CreateEditApartement</Link>
      <Link to="/DetailsApartment">DetailsApartment</Link>
      <Link to="/CreateEditRoom">CreateEditRoom</Link>
    </div>
  );
}
