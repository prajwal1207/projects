import "./App.css";
import DependentDropdown from "./components/Dropdown";
import { stateAndCities } from "./components/Dropdown/states";
import { useState } from "react";
import ListWithPagination from "./components/Pagination";

function App() {
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  const handleParentChange = (parent: any) => {
    setSelectedParent(parent);
  };

  const handleChildChange = (child: string | null) => {
    setSelectedChild(child);
  };

  return (
    <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      {/* <DependentDropdown
        data={stateAndCities}
        selectedParent={selectedParent}
        onParentChange={handleParentChange}
        selectedChild={selectedChild}
        onChildChange={handleChildChange}
      /> */}
      <ListWithPagination />
    </div>
  );
}

export default App;
