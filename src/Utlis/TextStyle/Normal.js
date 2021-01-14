export function textNormal(text) {
  return <div>{text + " "}</div>;
}

export function joinTextNormal(text1, text2) {
  return (
    <div>
      {text1 ? text1 : ""} : <strong>{text2 ? text2 : ""}</strong>
    </div>
  );
}
