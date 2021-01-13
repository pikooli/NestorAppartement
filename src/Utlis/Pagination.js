function checkNotEndIndex(index, newIndex, array) {
  if (
    newIndex >= 0 &&
    newIndex !== index &&
    array &&
    array.length / 10 > newIndex
  )
    return true;
  return false;
}

export function pagination(index, array) {
  console.log(index);
  let ret = [];
  let currentIndex = index * 10;
  for (let i = 0; i < 10; i++) {
    ret.push(array[currentIndex + i]);
  }
  return ret;
}

export function changePagination(
  index,
  setIndex,
  setDisplayApartements,
  array
) {
  function changeIndex(newIndex) {
    if (checkNotEndIndex(index, newIndex, array)) {
      setIndex(newIndex);
      setDisplayApartements(pagination(newIndex, array));
    }
  }

  return (
    <div className="position-relative  d-flex justify-content-center">
      <nav aria-label="Page navigation example ">
        <ul className="pagination">
          {checkNotEndIndex(index, index - 1, array) ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => changeIndex(index - 1)}
              >
                Previous
              </button>
            </li>
          ) : null}

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => changeIndex(index > 1 ? index : 1)}
            >
              {index + 1}
            </button>
          </li>

          {checkNotEndIndex(index, index + 1, array) ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => changeIndex(index + 1)}
              >
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
