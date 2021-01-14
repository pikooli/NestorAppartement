import { image } from "../../Utlis/Url";
import { showPicture } from "../../Utlis/ShowPicture";

function input(createClientValue, setCreateClientValue, fieldInput) {
  return (
    <div className="col-sm mb-3">
      <label className="form-label">
        Client {fieldInput}
        <input
          type="text"
          className="form-control"
          id={fieldInput}
          placeholder={fieldInput}
          value={
            createClientValue && createClientValue[fieldInput]
              ? createClientValue[fieldInput]
              : ""
          }
          onChange={(e) =>
            setCreateClientValue((val) => {
              return { ...val, [fieldInput]: e.target.value };
            })
          }
          required
        ></input>
      </label>
    </div>
  );
}

export function createClientForm(
  createClientValue,
  setCreateClientValue,
  submitForm
) {
  return (
    <form className="row">
      {showPicture(image.client, "client")}
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
