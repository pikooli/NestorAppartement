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
  console.log(createClientValue);
  return (
    <form className="row">
      <div className="col-sm-2 mb-3">
        <img
          className="rounded img-fluid"
          src="https://100k-faces.glitch.me/random-image"
          alt="people"
        />
      </div>
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
