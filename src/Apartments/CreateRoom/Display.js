import { showPicture } from "../../Utlis/ShowPicture";
import { input } from "../../Utlis/Inputs";
import { image } from "../../Utlis/Url";
export function goBackBtn(id) {
  return (
    <div className="d-flex justify-content-end">
      <a
        className="btn btn-primary mb-3 "
        href={id ? `/apartment/${id}` : `/createApartment/`}
      >
        Go back
      </a>
    </div>
  );
}

export function createRoomForm(
  createRoomValue,
  setCreateRoomValue,
  submitForm
) {
  return (
    <form className="row mt-5 mb-3">
      <div className="col-sm-2">{showPicture(image.room, "room")}</div>
      {input(createRoomValue, setCreateRoomValue, "number")}
      {input(createRoomValue, setCreateRoomValue, "area")}
      {input(createRoomValue, setCreateRoomValue, "price")}
      <button
        type="submit"
        className="btn btn-primary mt-5"
        onClick={submitForm}
      >
        Submit
      </button>
    </form>
  );
}
