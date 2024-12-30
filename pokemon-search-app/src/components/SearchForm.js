"use client";
import { fetchPokemonTypes } from "@/serveractions";
import { useEffect, useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const getPokemonTypes = async () => {
      try {
        const res = await fetchPokemonTypes();
        setTypes(res?.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonTypes();
  }, []);

  const handleSearch = () => {
    onSearch(searchTerm, selectedType);
  };
  useEffect(() => {
    onSearch("", selectedType);
  }, [searchTerm, selectedType]);

  return (
    <div className="flex  grow w-full p-3 flex-col gap-4">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="p-3 max-w-96  border-white bg-white rounded"
      >
        <option value="">Select</option>
        {types?.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search.."
          className="p-3  w-96 border border-gray-300 rounded-l-md"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-blue-950 text-white rounded-r-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
