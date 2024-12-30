import React, { useState } from "react";

import Pagination from "./pagination";
import Table from "./table";
import usePokemonFetcher from "./useFetchPokmons";

const PLACEHOLDER_IMAGE =
  "https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png";

const ListWithPagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const { list, total, isLoading } = usePokemonFetcher(
    currentPage,
    itemsPerPage
  );

  const data = list.map((item) => ({
    id: item.id,
    name: item.name,
    ability: item.abilities[0].ability.name,
    image: (
      <img
        src={
          item.sprites.other.dream_world.front_default
            ? item.sprites.other.dream_world.front_default
            : PLACEHOLDER_IMAGE
        }
        className="w-28 h-28 object-contain"
      />
    ),
    forms: item.forms[0].name,
    height: item.height + "ft",
  }));

  const columns = [
    { title: "Id", key: "id", id: 0 },
    { title: "Name", key: "name", id: 1 },
    { title: "Ability", key: "ability", id: 2 },
    { title: "Image", key: "image", id: 3 },
    { title: "Forms", key: "forms", id: 4 },
    { title: "Height", key: "height", id: 5 },
  ];

  return (
    <React.Fragment>
      <Table
        data={data}
        coloum={columns}
        className="my-6"
        loading={isLoading}
      />
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <Pagination
          total={total}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </React.Fragment>
  );
};

export default ListWithPagination;
