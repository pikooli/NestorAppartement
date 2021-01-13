import createRoomActionType from "./createApartmentActionType";

const initialState = {
  apID: "",
  number: "",
  name: "",
  rooms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case createRoomActionType.setAp:
      return {
        apID: action.payload.id,
        number: action.payload.number,
        name: action.payload.name,
        street: action.payload.street,
        zipCode: action.payload.zipCode,
        rooms: action.payload.rooms,
      };
    case createRoomActionType.setApID:
      return { ...state, apID: action.payload };
    case createRoomActionType.setName:
      return { ...state, name: action.payload };
    case createRoomActionType.setNumber:
      return { ...state, number: action.payload };
    case createRoomActionType.addRoom:
      return { ...state, rooms: [...state.rooms, action.payload] };
    case createRoomActionType.deleteRoom:
      let newRooms = [];
      state.rooms.forEach((room, index) => {
        if (index !== action.payload) newRooms.push(room);
      });
      return { ...state, rooms: [...newRooms] };
    case createRoomActionType.reset:
      return initialState;
    default:
      return state;
  }
}
