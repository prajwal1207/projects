"use client";
import Breadcrumb from "@/components/breadcrumbs";
import { getPokemonDetails } from "@/serveractions";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import placeholder from "../../../../assets/placeholder.svg";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setpokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonDetails(name);
        setpokemon(data?.props?.pokemon);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, [name]);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: name, href: `/pokemon/${name}` },
  ];

  console.log(
    pokemon?.sprites?.other?.dream_world.front_default,
    "pokemon?.sprites?.other?.dream_world.front_default"
  );
  const imageUrl =
    pokemon?.sprites?.other?.dream_world?.front_default || placeholder;

  return (
    <div className="min-h-screen grow p-0 flex flex-col items-end justify-center bg-gray-100">
      <div className="absolute top-5 left-5">
        <Breadcrumb crumbs={crumbs} />
      </div>
      <div className="h-full p-5  w-1/3 content-center">
        <div className="flex h-full flex-col items-center justify-center rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="bg-cyan-500 p-5 flex items-center justify-center w-full h-full pt-20 pb-20 ">
            <Image src={imageUrl} width={300} height={300} alt={pokemon.name} />
          </div>
          <div className="flex flex-col items-start justify-start bg-orange-200 p-5 w-full pt-20 pb-20">
            <h1 className="text-2xl font-bold text-center capitalize w-full">
              {pokemon.name}
            </h1>
            <p className="text-center font-extrabold text-black w-full">
              Height: <span className="font-normal">{pokemon.height}</span>
            </p>
            <p className="text-center font-extrabold text-black w-full">
              Weight: <span className="font-normal">{pokemon.weight}</span>
            </p>
            <p className="text-center font-extrabold text-black w-full">
              Base Experience:{" "}
              <span className="font-normal">{pokemon.base_experience}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
