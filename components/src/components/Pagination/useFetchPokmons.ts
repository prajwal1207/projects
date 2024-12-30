import { useEffect, useState } from "react";
import { TPokemon } from "./type";

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonFetcher = (currentPage: number, itemsPerPage: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [list, setList] = useState<TPokemon[]>([]);

  const fetchPokemonDetails = (list: Pokemon[]) => {
    return list.map((item) => fetch(item.url));
  };

  const fetchPokemon = async () => {
    const offset = currentPage * itemsPerPage;
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`;
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const { count, results } = await response.json();
      const res = await Promise.all(fetchPokemonDetails(results));
      const pokemonDetails = await Promise.all(res.map((item) => item.json()));
      setTotal(count);
      setList(pokemonDetails);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [currentPage, itemsPerPage]);

  return { list, total, isLoading };
};

export default usePokemonFetcher;
