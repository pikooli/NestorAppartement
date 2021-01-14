export function createBookingBtn(triggerSave) {
  return (
    <button className="btn btn-primary" onClick={triggerSave}>
      {" "}
      save{" "}
    </button>
  );
}
