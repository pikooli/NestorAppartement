import store from "../store";
import createApartmentAction from "../Reducers/createApartmentActionType";

function getState() {
  return store.getState();
}

function reset() {
  store.dispatch({ type: createApartmentAction.reset });
}

function setAparmentName(name) {
  if (typeof name === "string") {
    store.dispatch({ type: createApartmentAction.setName, payload: name });
    return true;
  } else return false;
}

function setAparmentNumber(number) {
  if (typeof number === "string") {
    store.dispatch({ type: createApartmentAction.setNumber, payload: number });
    return true;
  } else return false;
}

function addRoom(room) {
  if (typeof room === "object") {
    store.dispatch({ type: createApartmentAction.addRoom, payload: room });
    return true;
  } else return false;
}

function deleteRoom(roomIndex) {
  if (typeof roomIndex === "number") {
    store.dispatch({
      type: createApartmentAction.deleteRoom,
      payload: roomIndex,
    });
    return true;
  } else return false;
}

export default {
  getState,
  reset,
  setAparmentName,
  setAparmentNumber,
  addRoom,
  deleteRoom,
};
