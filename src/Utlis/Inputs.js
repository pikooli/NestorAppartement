import _ from "lodash";

export function input(searchValue, setSearchValue, field, big) {
  return (
    <div className={big ? "col-sm" : "col-sm-2"}>
      <label className="form-label">
        <span>{_.capitalize(field)}</span>{" "}
        <input
          type={field === "price" ? "number" : "text"}
          className="form-control"
          placeholder={field}
          name={field}
          value={searchValue && searchValue[field] ? searchValue[field] : ""}
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
