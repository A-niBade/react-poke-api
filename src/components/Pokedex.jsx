import { useState } from "react";
import { Header } from "./Header";
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

  const filtrar = (type) => {
    console.log(`type: ${type}`);
  };

  return (
    <div>
      <Header />
      <aside className="searchbar-container">
        <div className="dot">
          <span className="dot-blue"></span>
          <span className="dot-red"></span>
          <span className="dot-yellow"></span>
          <span className="dot-green"></span>
        </div>

        <form onSubmit={handleSubmit} className="search-name">
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="searchbar-input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

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
    </div>
  );
};
