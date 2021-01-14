import _ from "lodash";

export function input(searchValue, setSearchValue, fieldInput, object) {
  return (
    <div className="col-sm-2">
      <label className="form-label">
        {_.capitalize(object)} {fieldInput}
        <input
          type={fieldInput === "price" ? "number" : "text"}
          className="form-control"
          placeholder={fieldInput}
          name={fieldInput}
          value={
            searchValue[object] && searchValue[object][fieldInput]
              ? searchValue[object][fieldInput]
              : ""
          }
          onChange={(e) =>
            setSearchValue((state) => {
              return {
                ...state,
                [object]: {
                  ...state[object],
                  [fieldInput]: e.target.value ? e.target.value : null,
                },
              };
            })
          }
        ></input>
      </label>
    </div>
  );
}

export function objIsEmplty(obj) {
  for (let key in obj) {
    if (obj[key]) return false;
  }
  return true;
}
