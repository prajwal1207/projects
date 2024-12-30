import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ListItems = ({ list, setList }) => {
    const navigate = useNavigate()
  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div>
      <ul>
        {list?.map((el, index) => (
          <div key={index} style={{ display: "flex" }}>
            <li value={el} key={`${el}-${index}`}>
              {el}
            </li>
            <button onClick={() => navigate(`/todo/${index}`)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
