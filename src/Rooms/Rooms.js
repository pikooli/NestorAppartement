import React, { useEffect, useState } from "react";
import url from "../Utlis/Url";
import api from "../Utlis/ApiRequest";
import { pagination, changePagination } from "../Utlis/Pagination";
import { displayRooms, searchEntry } from "./Display";

function useLogic() {
  const [rooms, setRooms] = useState(null);
  const [index, setIndex] = useState(0);
  const [displayRoomsArray, setDisplayRoomsArray] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    api.get(url.room.base).then((data) => {
      setRooms(data.rooms);
      setDisplayRoomsArray(pagination(0, data.rooms));
    });
  }, []);

  function triggerSearch() {}
  return {
    displayRoomsArray,
    searchValue,
    setSearchValue,
    triggerSearch,
    setDisplayRoomsArray,
  };
}

export default function App({}) {
  const {
    displayRoomsArray,
    searchValue,
    setSearchValue,
    triggerSearch,
    setDisplayRoomsArray,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center">ROOM</h1>
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      {displayRooms(displayRoomsArray, setDisplayRoomsArray)}
    </div>
  );
}
