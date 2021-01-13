import { input } from "./utils";

export function searchApartmentInput(searchValue, setSearchValue) {
  return (
    <div className="row ">
      {input(searchValue, setSearchValue, "number", "apartment")}
      {input(searchValue, setSearchValue, "name", "apartment")}
      {input(searchValue, setSearchValue, "street", "apartment")}
      {input(searchValue, setSearchValue, "zipCode", "apartment")}
    </div>
  );
}
