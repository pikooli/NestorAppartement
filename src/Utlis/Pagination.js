export function pagination(index, array) {
  console.log(index);
  let ret = [];
  let currentIndex = index * 10;
  for (let i = 0; i < 10; i++) {
    ret.push(array[currentIndex + i]);
  }
  return ret;
}

export function changePagination(index, changeIndex, checkNotEndIndex) {
  return (
    <div className="position-relative  d-flex justify-content-center">
      <nav aria-label="Page navigation example ">
        <ul className="pagination">
          {checkNotEndIndex(index - 1) ? (
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

          {checkNotEndIndex(index + 1) ? (
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
