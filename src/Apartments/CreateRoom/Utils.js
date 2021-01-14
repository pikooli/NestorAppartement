import url from "../../Utlis/Url";
import api from "../../Utlis/ApiRequest";
import ReduxActions from "../../Redux/Actions/ReduxActions";
import { modalAlertError } from "../../Utlis/Alert";

async function addingToExistingApartment(createRoomValue, apartmentId) {
  return await api.post(url.room.base, {
    number: createRoomValue.number,
    area: createRoomValue.area,
    price: createRoomValue.price,
    apartmentId: apartmentId,
  });
}

export async function addingRoom(createRoomValue, apartmentId) {
  if (apartmentId) {
    addingToExistingApartment(createRoomValue, apartmentId).then((data) => {
      if (!data) modalAlertError();
      else window.location.href = `/apartment/${apartmentId}`;
    });
  } else {
    ReduxActions.addRoom(createRoomValue);
    window.location.href = `/createApartment`;
  }
}
