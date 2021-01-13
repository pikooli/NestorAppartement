import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function useLogic() {
  let { id } = useParams();

  useEffect(() => {}, []);

  return { id };
}

export default function App({}) {
  const { id } = useLogic();

  return (
    <div>
      <h1>Details Apartemnt</h1>
      <p>{id}</p>
    </div>
  );
}
