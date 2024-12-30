import React, { useState } from "react";

const SearchBar = ({ list, setList }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      setList([...list, searchQuery]);
      setSearchQuery("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Add Item</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
