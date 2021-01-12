const api = {
  get: async (url) =>
    fetch(url).then(async (data) => {
      if (data.status === 200) return await data.json();
      else return null;
    }),
  delete: async (url) =>
    fetch(url, { method: "DELETE" }).then(async (data) => {
      if (data.status === 200) return await data.json();
      else return null;
    }),
  post: async (url, body) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (data) => {
      if (data.status === 200) return await data.json();
      else return null;
    }),
};

export default api;
