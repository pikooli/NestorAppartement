import React, { useEffect, useState } from "react";
import url from "../../../Utlis/Url";
import api from "../../../Utlis/ApiRequest";
import { pagination, changePagination } from "../../../Utlis/Pagination";
import { displayRooms, searchEntry } from "./Display";
import { searchRoom } from "./SearchAlgorithm";
import reduxActions from "../../../Redux/Actions/ReduxActions";

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

export default function App({ roomSave, saveRoom }) {
  const {
    rooms,
    displayRoomsArray,
    searchValue,
    setSearchValue,
    triggerSearch,
    setDisplayRoomsArray,
    searchResult,
    index,
    setIndex,
  } = useLogic();

  return (
    <div className="container">
      <h1 className="text-center my-3">Room</h1>
      {searchEntry(searchValue, setSearchValue, triggerSearch)}
      {displayRooms(
        searchResult ? searchResult : displayRoomsArray,
        roomSave,
        saveRoom
      )}
      {!searchResult
        ? changePagination(index, setIndex, setDisplayRoomsArray, rooms)
        : null}
    </div>
  );
}
