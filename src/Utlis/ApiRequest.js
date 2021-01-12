const api = {
  get: async (url) => {
    if (url)
      return await fetch(url).then(async (data) => {
        if (data.status === 200) return await data.json();
        else return null;
      });
  },
  delete: async (url) => {
    if (url)
      return await fetch(url, { method: "DELETE" }).then(async (data) => {
        if (data.status === 200) return await data.json();
        else return null;
      });
  },
  post: async (url, body) => {
    if (body)
      return await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(async (data) => {
        if (data.status === 200) return await data.json();
        else return null;
      });
    else return null;
  },
};

export default api;
