"use server";

export async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPokemonTypes() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPokemonByTypes(type) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    const list =  data?.pokemon?.map((el) => el.pokemon);
    return list;
  } catch (error) {
    console.log(error,'error from the by type controller');
  }
}

export async function getPokemonDetails(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return { props: { pokemon: data } };
  } catch (error) {
    console.log(error);
  }
}
