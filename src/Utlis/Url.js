const base = "https://app-booking-christ.herokuapp.com/";

export default {
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
