export function goBackBtn(url) {
  return (
    <div className="d-flex justify-content-end">
      <a className="btn btn-primary mb-3 " href={url}>
        Go back
      </a>
    </div>
  );
}
