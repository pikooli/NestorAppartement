import { input } from "./utils";

export function searchClientInput(searchValue, setSearchValue) {
  return (
    <div className="row ">
      {input(searchValue, setSearchValue, "firstName", "client")}
      {input(searchValue, setSearchValue, "lastName", "client")}
      {input(searchValue, setSearchValue, "phone", "client")}
    </div>
  );
}
