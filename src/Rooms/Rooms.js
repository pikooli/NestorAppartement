import React, { useEffect, useState } from "react";
import url from "../Utlis/Url";
import api from "../Utlis/ApiRequest";
import { pagination, changePagination } from "../Utlis/Pagination";
import { displayRooms, searchEntry } from "./Display";
import { searchRoom } from "./SearchAlgorithm";

function useLogic() {
  const [rooms, setRooms] = useState(null);
  const [index, setIndex] = useState(0);
  const [displayRoomsArray, setDisplayRoomsArray] = useState(null);
  const [searchValue, setSearchValue] = useState({});
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    api.get(url.room.base).then((data) => {
      if (!data) return;
      setRooms(data.rooms);
      setDisplayRoomsArray(pagination(0, data.rooms));
    });
  }, []);

  function triggerSearch() {
    setSearchResult(searchRoom(rooms, searchValue));
  }

  return {
    rooms,
    displayRoomsArray,
    searchValue,
    setSearchValue,
    triggerSearch,
    setDisplayRoomsArray,
    searchResult,
    setSearchResult,
    index,
    setIndex,
  };
}

export default function App({}) {
  const {
    rooms,
    displayRoomsArray,
    searchValue,
    setSearchValue,
    triggerSearch,
    setDisplayRoomsArray,
    searchResult,
    setSearchResult,
    index,
    setIndex,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center my-3">Room</h1>
      <div className=" btn btn-primary mb-3 bg-white border-white">test</div>
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      {!searchResult
        ? changePagination(index, setIndex, setDisplayRoomsArray, rooms)
        : null}
      {displayRooms(
        searchResult ? searchResult : displayRoomsArray,
        searchResult ? setSearchResult : setDisplayRoomsArray
      )}
    </div>
  );
}
