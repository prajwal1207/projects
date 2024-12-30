"use client";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { fetchPokemon, fetchPokemonByTypes } from "@/serveractions";

const PokemonList = ({ searchTerm, selectedType }) => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = async () => {
    try {
      const data = await fetchPokemon();
      setPokemonList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonByType = async () => {
    try {
      const data = await fetchPokemonByTypes(selectedType);
      setPokemonList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedType) {
      getPokemonByType();
    } else {
      getPokemon();
    }
  }, [selectedType]);

  const filteredList =
    pokemonList.filter((pokemon) =>
      pokemon?.name?.includes(searchTerm?.toLowerCase())
    ) || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      {filteredList?.map((pokemon) => (
        <PokemonCard key={pokemon?.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
