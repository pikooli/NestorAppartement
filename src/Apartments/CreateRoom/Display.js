export function goBackBtn(id) {
  return (
    <div className="d-flex justify-content-end">
      <a
        className="btn btn-primary my-3 "
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
    <form className="row">
      <div className="col-sm-2 mb-3">
        <label className="form-label">
          Room number
          <input
            type="text"
            className="form-control"
            placeholder="number"
            value={createRoomValue.number ? createRoomValue.number : ""}
            onChange={(e) =>
              setCreateRoomValue((val) => {
                return { ...val, number: e.target.value };
              })
            }
            required
          ></input>
        </label>
      </div>
      <div className=" col-sm-2 mb-3">
        <label className="form-label">
          Room area
          <input
            type="text"
            className="form-control"
            placeholder="area"
            value={createRoomValue.area ? createRoomValue.area : ""}
            onChange={(e) =>
              setCreateRoomValue((val) => {
                return { ...val, area: e.target.value };
              })
            }
            required
          ></input>
        </label>
      </div>

      <div className=" col-sm-2 mb-3">
        <label className="form-label">
          Room price €
          <input
            type="number"
            className="form-control"
            placeholder="price"
            value={createRoomValue.price ? createRoomValue.price : ""}
            onChange={(e) =>
              setCreateRoomValue((val) => {
                return { ...val, price: e.target.value };
              })
            }
            min="0"
            step="1"
            required
          ></input>
        </label>
      </div>

      <button type="submit" className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>
    </form>
  );
}
