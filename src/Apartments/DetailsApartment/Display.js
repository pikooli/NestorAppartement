export function apartmentDisplay(apartment) {
  if (!apartment) return null;
  return (
    <li className="list-group-item " key={apartment.id}>
      <a className="float-left container" href={`apartment/${apartment.id}`}>
        <div className="row">
          <div className="col-sm-2">
            <img
              className="rounded img-fluid"
              src="https://www.jll.fr/images/global/treant-and-insights/global-cities-why-timber-buildings.jpg.rendition/cq5dam.web.1280.1280.jpeg"
              alt="building"
            />
          </div>
          <div className="col-sm text-dark">
            <h3>Ap N°{apartment.number}</h3>
            <p>
              Apartment name : {apartment.name}
              <br />
              Apartment street : {apartment.street}
              <br />
              Apartment zipCode : {apartment.zipCode}
              <br />
              Apartment rooms :{" "}
              {apartment.rooms ? apartment.rooms.length : null}
              <br />
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}

function displayRoom(room, index) {
  if (!room) return null;
  return (
    <li key={index} className="list-group-item">
      {room.number} {room.area} {room.price}
    </li>
  );
}

export function displayRooms(apartment) {
  if (!apartment || !apartment.test) return null;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {apartment.test.map((room, index) => displayRoom(room, index))}
      </ul>
    </div>
  );
}
