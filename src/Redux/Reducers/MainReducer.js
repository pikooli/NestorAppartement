import ActionType from "./ActionType";

const initialState = {
  apartment: {},
  detailsApartment: {},
  room: {},
  client: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    // aparment
    case ActionType.setAp:
      return {
        ...state,
        apartment: {
          ...action.payload,
        },
      };
    case ActionType.deleteAp:
      return {
        ...state,
        apartment: {},
      };

    // details apartment
    case ActionType.setDetailsAp:
      return {
        ...state,
        detailsApartment: {
          ...action.payload,
        },
      };
    case ActionType.deleteDetailsAp:
      return {
        ...state,
        detailsApartment: {},
      };

    // client
    case ActionType.setClient:
      return {
        ...state,
        client: {
          ...action.payload,
        },
      };
    case ActionType.deleteCLient:
      return {
        ...state,
        client: {},
      };
    // room
    case ActionType.setRoom:
      return {
        ...state,
        room: {
          ...action.payload,
        },
      };
    case ActionType.deleteRoom:
      return {
        ...state,
        room: {},
      };

    // room in create appartemnt
    case ActionType.addRoom:
      if (state.apartment.rooms)
        return {
          ...state,
          apartment: {
            ...state.apartment,
            rooms: [...state.apartment.rooms, action.payload],
          },
        };
      else
        return {
          ...state,
          apartment: {
            ...state.apartment,
            rooms: [action.payload],
          },
        };

    //
    case ActionType.reset:
      return initialState;
    //
    default:
      return state;
  }
}
