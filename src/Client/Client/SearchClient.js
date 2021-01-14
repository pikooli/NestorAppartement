export function searchClient(clients, searchValue) {
  let retArray = [];
  if (
    !searchValue.firstName &&
    !searchValue.lastName &&
    !searchValue.phone &&
    !searchValue.birthDate &&
    !searchValue.nationality
  )
    return null;

  if (searchValue.firstName) {
    clients.forEach((client) => {
      if (client.firstName === searchValue.firstName) retArray.push(client);
    });
  }

  if (searchValue.lastName) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.lastName === searchValue.lastName ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.lastName === searchValue.lastName) retArray.push(client);
      });
  }

  if (searchValue.phone) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.phone === searchValue.phone ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.nationality === searchValue.nationality)
          retArray.push(client);
      });
  }

  if (searchValue.birthDate) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.birthDate === searchValue.birthDate ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.birthDate === searchValue.birthDate) retArray.push(client);
      });
  }

  if (searchValue.nationality) {
    if (retArray.length)
      retArray = retArray.map((client) => {
        return client.nationality === searchValue.nationality ? client : null;
      });
    else
      clients.forEach((client) => {
        if (client.nationality === searchValue.nationality)
          retArray.push(client);
      });
  }

  return retArray;
}
