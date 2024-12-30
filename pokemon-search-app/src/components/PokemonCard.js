"use client";
import Image from "next/image";
import placeholder from "../../assets/placeholder.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(pokemon?.url);
        const result = await res.json();
        setDetails(result);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  const imageUrl =
    details.sprites?.other?.dream_world?.front_default || placeholder;

  return (
    <div className="border flex flex-col  justify-end rounded-lg  bg-white shadow">
      <div className="p-5 flex items-center justify-center">
        <Image src={imageUrl} width={150} height={150} alt={pokemon?.name} />
      </div>
      <div className="p-5 flex flex-col items-stretch bg-red-50">
        <h1 className="text-lg font-bold capitalize">{pokemon?.name}</h1>
        <Link href={`/pokemon/${pokemon?.name}`} className="mt-10 mb-10">
          <button className="border-none bg-none size-7 font-bold text-blue-500">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
