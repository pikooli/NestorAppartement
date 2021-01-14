export function createResetBtn(triggerBooking) {
  return (
    <button className="btn btn-primary" onClick={triggerBooking}>
      <i class="fas fa-redo-alt fa-1x"></i>
    </button>
  );
}
