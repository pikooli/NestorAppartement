export function showPicture(url, tag) {
  return (
    <div className="center w-100 h-100 ">
      <img className="rounded img-fluid maxHeigth" src={url} alt={tag} />
    </div>
  );
}
