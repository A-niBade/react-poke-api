export const Pagination = ({
  onLeftClick,
  onRightClick,
  pages,
  totalPages,
}) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick} className="btn-right">
        <img src="static/arrow.svg" className="right-arrow" />
      </button>

      <div className="pagination">
        <h3>
          {pages} of {totalPages}
        </h3>
      </div>

      <button onClick={onRightClick} className="btn-left">
        <img src="static/arrow.svg" className="left-arrow" />
      </button>
    </div>
  );
};
