import React, { useEffect, useState } from "react";
import { renderArrayDisplay } from "./Display";
import Client from "./Client/Client";
import Room from "./Room/Rooms";

function useLogic() {
  useEffect(() => {}, []);

  return {};
}

export default function App({}) {
  const {} = useLogic();

  return (
    <div className="container">
      <h1 className="text-center">Create booking</h1>;
      <div className="row">
        <div className="col-sm-6">
          <Room />
        </div>
        <div className="col-sm-6">
          <Client />
        </div>
      </div>
    </div>
  );
}
