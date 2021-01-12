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
      <h2>Client</h2>;<Link to="/client/test">DetailsClient</Link>
      <Link to="/CreateClient">CreateEditClient</Link>
    </div>
  );
}
