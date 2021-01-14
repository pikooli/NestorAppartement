export function renderArrayDisplay(Array, elementDisplay) {
  if (!Array) return null;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {Array.map((element) => {
          return elementDisplay(element);
        })}
      </ul>
    </div>
  );
}
