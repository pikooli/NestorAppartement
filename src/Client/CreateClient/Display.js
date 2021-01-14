import { image } from "../../Utlis/Url";
import { showPicture } from "../../Utlis/ShowPicture";
import { input } from "../../Utlis/Inputs";

export function createClientForm(
  createClientValue,
  setCreateClientValue,
  submitForm
) {
  return (
    <form className="row">
      <div className="col-sm-2">{showPicture(image.client, "client")}</div>
      <div className="col-sm mb-3">
        <div className="row">
          {input(createClientValue, setCreateClientValue, "firstName")}
          {input(createClientValue, setCreateClientValue, "lastName")}
          {input(createClientValue, setCreateClientValue, "email")}
        </div>
        <div className="row">
          {input(createClientValue, setCreateClientValue, "phone")}
          {input(createClientValue, setCreateClientValue, "nationality")}
          {input(createClientValue, setCreateClientValue, "birthDate")}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3"
        onClick={submitForm}
      >
        Submit
      </button>
    </form>
  );
}
