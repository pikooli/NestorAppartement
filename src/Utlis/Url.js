const base = "https://app-booking-christ.herokuapp.com/";

const url = {
  apartment: {
    base: `${base}api/apartment`,
    id: (id) => `${base}api/apartment/${id}`,
  },
  client: {
    base: `${base}api/client`,
    id: (id) => `${base}api/client/${id}`,
  },
  room: {
    base: `${base}api/room`,
    id: (id) => `${base}api/room/${id}`,
  },
  booking: {
    base: `${base}api/booking`,
    id: (id) => `${base}api/booking/${id}`,
  },
};

export const image = {
  apartment:
    "https://www.jll.fr/images/global/treant-and-insights/global-cities-why-timber-buildings.jpg.rendition/cq5dam.web.1280.1280.jpeg",
  room:
    "https://cdn.decoist.com/wp-content/uploads/2020/02/Beautiful-small-white-living-room-blends-monochromatic-beauty-with-modernity-53868.jpg",
  client: "https://100k-faces.glitch.me/random-image",
};

export default url;
