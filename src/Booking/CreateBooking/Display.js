export function createBookingBtn(triggerBooking) {
  return (
    <button className="btn btn-primary" onClick={triggerBooking}>
      Submit
    </button>
  );
}
