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
  console.log(id);
  useEffect(() => {}, []);

  return {};
}

export default function App({}) {
  const {} = useLogic();

  return <h1>Details customer</h1>;
}
