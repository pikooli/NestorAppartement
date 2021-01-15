export function submitBtn(submitFunction) {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn btn-primary mt-5 w-25"
        onClick={submitFunction}
      >
        Submit
      </button>
    </div>
  );
}
