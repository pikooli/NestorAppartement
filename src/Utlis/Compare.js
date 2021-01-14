export function compareString(element, temoin) {
  if (element && temoin && element.toLowerCase() === temoin.toLowerCase())
    return true;
  return false;
}
