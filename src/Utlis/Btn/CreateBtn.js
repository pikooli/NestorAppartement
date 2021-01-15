export function createBtn(text, url) {
  return (
    <div className="d-flex justify-content-end">
      <a type="button" className="btn btn-primary mb-3 " href={url}>
        Create {text}
      </a>
    </div>
  );
}
