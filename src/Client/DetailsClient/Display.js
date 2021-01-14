import { image } from "../../Utlis/Url";
import { showPicture } from "../../Utlis/ShowPicture";

export function createClientBtn() {
  return (
    <div className="d-flex justify-content-end">
      <a type="button" className="btn btn-primary my-3 " href="/createClient">
        Create Client
      </a>
    </div>
  );
}

export function clientDisplay(client) {
  if (!client) return null;
  return (
    <li key={client.id} className="list-group-item my-5" key={client.id}>
      <div className="float-left container black">
        <div className="row">
          {showPicture(image.client, "client")}
          <div className="col-sm-2">
            <div>
              first name : {client.firstName}
              <br />
              lastName : {client.lastName} <br />
              Phone :{client.phone} <br />
              birthDate : {client.birthDate}
              <br />
              nationality : {client.nationality}
              <br /> booking : {client.bookings ? client.bookings.length : null}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
