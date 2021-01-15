import { showPicture } from "../../Utlis/ShowPicture";
import { input } from "../../Utlis/Inputs";
import { image } from "../../Utlis/Url";
import { submitBtn } from "../../Utlis/Btn/SubmitBtn";

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
      {submitBtn(submitForm)}
    </form>
  );
}
