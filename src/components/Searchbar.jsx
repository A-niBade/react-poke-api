export const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <form>
        <input
          type="text"
          placeholder="Search Pokemon..."
          className="nes-input searchbar-input"
        />
        <button type="button" className="nes-btn searchbar-btn">
          Search
        </button>
      </form>
    </div>
  );
};
