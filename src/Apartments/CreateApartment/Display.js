import { showPicture } from "../../Utlis/ShowPicture";
import { image } from "../../Utlis/Url";
import { joinTextNormal } from "../../Utlis/TextStyle/Normal";
import { isArrayEmpty } from "../../Utlis/IsArrayEmpty";
import { removeBtn } from "../../Utlis/Btn/RemoveBtn";
import { submitBtn } from "../../Utlis/Btn/SubmitBtn";

function displayRoom(room, index, removeFunction) {
  if (!room) return null;
  return (
    <li key={index} className="list-group-item my-2">
      <div className="row ">
        <div className="col-sm-2">{showPicture(image.room, "room")}</div>
        <div className="col-sm">
          {joinTextNormal("Number", room.number)}
          {joinTextNormal("Area", room.area)}
          {joinTextNormal("Price", room.price)}
          {removeBtn(index, removeFunction)}
        </div>
      </div>
    </li>
  );
}

export function displayRooms(rooms, removeFunction) {
  if (!Array.isArray(rooms) || isArrayEmpty(rooms)) return null;
  return (
    <div className="card mt-3">
      <ul className="list-group list-group-flush">
        {rooms.map((room, index) => displayRoom(room, index, removeFunction))}
      </ul>
    </div>
  );
}

export function createApartmentForm(
  createApValue,
  setName,
  setNumber,
  submitForm,
  removeRoom
) {
  return (
    <form className="row mt-5 mb-3">
      <div className="col-sm-2 ">
        {showPicture(image.apartment, "building")}
      </div>
      <div className="col-sm-2 mb-3">
        <label className="form-label">
          Number
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="number"
            value={
              createApValue && createApValue.number ? createApValue.number : ""
            }
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </label>
      </div>
      <div className=" col-sm-2 mb-3">
        <label className="form-label">
          Name
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="number"
            value={
              createApValue && createApValue.name ? createApValue.name : ""
            }
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
      </div>
      {createApValue && createApValue.rooms
        ? displayRooms(createApValue.rooms, removeRoom)
        : null}
      {submitBtn(submitForm)}
    </form>
  );
}
