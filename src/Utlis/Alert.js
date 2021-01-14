export function modalAlert(text) {
  alert(text);
}

export function modalAlertError(text) {
  alert(
    text
      ? text
      : "Something went wrong please try again or contact your administrator system"
  );
}
