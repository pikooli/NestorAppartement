import _ from "lodash";

export function input(searchValue, setSearchValue, field) {
  return (
    <div className="col-sm">
      <label className="form-label">
        <span>{_.capitalize(field)}</span>{" "}
        <input
          type="text"
          className="form-control"
          placeholder={field}
          name={field}
          value={searchValue[field] ? searchValue[field] : ""}
          onChange={(e) =>
            setSearchValue((state) => {
              return { ...state, [field]: e.target.value };
            })
          }
        ></input>
      </label>
    </div>
  );
}
