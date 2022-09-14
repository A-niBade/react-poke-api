import { useState } from "react";
import { Pagination } from "./Pagination";

export const Pokedex = ({ pages, setPages, total, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const lastPage = () => {
    const nextPage = Math.max(pages - 1, 0);
    setPages(nextPage);
  };

  const nextPage = () => {
    if (pages === total) return;
    const nextPage = Math.min(pages + 1, total);
    setPages(nextPage);
  };

  return (
    <aside className="nes-container is-rounded searchbar-container">
      <div className="nes-container with-title is-rounded search-name">
        <p className="title title-name">Search by name</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="nes-input searchbar-input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button type="submit" className="nes-btn search-btn">
            Search
          </button>
        </form>
      </div>

      <div className="btn-container">
        <div className="nes-container is-rounded btn-red"></div>
        <div className="nes-container is-rounded btn-blue"></div>
      </div>

      <Pagination
        pages={pages + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
    </aside>
  );
};
