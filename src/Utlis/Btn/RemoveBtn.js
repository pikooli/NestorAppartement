export function removeBtn(index, removeFunction) {
  return (
    <button
      className="btn btn-primary right "
      onClick={(e) => removeFunction(e, index)}
    >
      x
    </button>
  );
}
