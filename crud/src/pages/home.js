import { useEffect, useState } from "react";
import ListItems from "../components/ListItems";
import SearchBar from "../components/searchBar";

const HomePage = () => {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("todo")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <SearchBar list={list} setList={setList} />
      <ListItems list={list} setList={setList} />
    </div>
  );
};

export default HomePage;
