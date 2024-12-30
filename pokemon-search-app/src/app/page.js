"use client";
import { useState } from "react";
import PokemonList from "../components/PokemonList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  console.log({ searchTerm, selectedType });

  const handleSearch = (term, type) => {
    setSearchTerm(term);
    setSelectedType(type);
  };

  return (
    <>
      <div className="container flex items-start justify-start mx-auto pt-4 pb-4 overflow-hidden ">
        <SearchForm onSearch={handleSearch} />
      </div>
      <div className="container mx-auto pb-3">
        <PokemonList searchTerm={searchTerm} selectedType={selectedType} />
      </div>
    </>
  );
};

export default Home;
