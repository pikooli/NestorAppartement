import store from "../store";
import ActionType from "../Reducers/ActionType";

function getState() {
  return store.getState();
}

function reset() {
  store.dispatch({ type: ActionType.reset });
}

function setAp(apartment) {
  if (typeof apartment === "object") {
    store.dispatch({ type: ActionType.setAp, payload: apartment });
    return true;
  } else return false;
}

function deleteAp() {
  store.dispatch({ type: ActionType.deleteAp });
  return true;
}
function getAp() {
  return store.getState().apartment;
}

function setDetailsAp(apartment) {
  if (typeof apartment === "object") {
    store.dispatch({ type: ActionType.setDetailsAp, payload: apartment });
    return true;
  } else return false;
}

function deleteDetailsAp() {
  store.dispatch({ type: ActionType.deleteDetailsAp });
  return true;
}
function getDetailsAp() {
  return store.getState().detailsApartment;
}

function setClient(client) {
  if (typeof client === "object") {
    store.dispatch({ type: ActionType.setClient, payload: client });
    return true;
  } else return false;
}

function deleteCLient() {
  store.dispatch({ type: ActionType.deleteCLient });
  return true;
}

function getClient() {
  return store.getState().cleint;
}
function setRoom(room) {
  if (typeof room === "object") {
    store.dispatch({ type: ActionType.setRoom, payload: room });
    return true;
  } else return false;
}

function removeRoom() {
  store.dispatch({ type: ActionType.removeRoom });
  return true;
}

function getRoom() {
  return store.getState().room;
}

function addRoom(room) {
  if (typeof room === "object") {
    store.dispatch({ type: ActionType.addRoom, payload: room });
    return true;
  } else return false;
}

function deleteRoom(roomIndex) {
  if (typeof roomIndex === "number") {
    store.dispatch({
      type: ActionType.deleteRoom,
      payload: roomIndex,
    });
    return true;
  } else return false;
}

export default {
  getState,
  reset,
  getAp,
  setAp,
  deleteAp,
  setDetailsAp,
  deleteDetailsAp,
  getDetailsAp,
  getClient,
  setClient,
  deleteCLient,
  getRoom,
  setRoom,
  removeRoom,
  addRoom,
  deleteRoom,
};
