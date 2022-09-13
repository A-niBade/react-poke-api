import { useState } from 'react';
import { searchPokemon } from '../helpers/searchPokemon';
import { Pagination } from './Pagination';

export const Pokedex = ({ pages, setPages, total }) => {
  const [inputValue, setInputValue] = useState('');
  const [pokemon, setPokemon] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchPokemon(inputValue);
    setPokemon(data);
    setInputValue('');
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
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
          <button type="submit" className="nes-btn search-btn">
            Search
          </button>
        </form>
      </div>

      <div className="nes-container is-rounded with-title search-type">
        <p className="title title-type">Filter by type</p>
        <div class="nes-select">
          <select required id="default_select">
            <option value="" disabled selected hidden>
              Select...
            </option>
            <option value="">To be</option>
            <option value="1">Not to be</option>
          </select>
        </div>
      </div>

      <div className="nes-container is-rounded with-title search-region">
        <p className="title title-region">Filter by region</p>
        <div class="nes-select">
          <select required id="default_select">
            <option value="" disabled selected hidden>
              Select...
            </option>
            <option value="">To be</option>
            <option value="1">Not to be</option>
          </select>
        </div>
      </div>

      <div className="btn-container">
        <div className="nes-container is-rounded btn-red"></div>
        <div className="nes-container is-rounded btn-blue"></div>
      </div>

      <Pagination pages={pages} totalPages={total} onLeftClick={lastPage} onRightClick={nextPage} />
    </aside>
  );
};
