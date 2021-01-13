export function input(searchValue, setSearchValue, fieldInput, object) {
  return (
    <div className="col-sm-2">
      <label className="form-label">
        {object} {fieldInput}
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
                [object]: { ...state[object], [fieldInput]: e.target.value },
              };
            })
          }
        ></input>
      </label>
    </div>
  );
}
