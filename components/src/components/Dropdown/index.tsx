import { useState } from "react";

type State = {
  name: string;
  options: string[];
};

type DependentDropdownProps = {
  data: State[];
  selectedParent?: State | null;
  onParentChange: (state: State | null) => void;
  selectedChild?: string | null;
  onChildChange: (city: string | null) => void;
};

const DependentDropdown = ({
  data,
  selectedParent,
  onParentChange,
  selectedChild,
  onChildChange,
}: DependentDropdownProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleParentChange = (parentName: string) => {
    const parent = data.find(({ name }) => name === parentName) || null;
    onParentChange(parent);
    onChildChange(null);
    setErrorMessage("");
  };

  const handleChildChange = (childName: string) => {
    if (!selectedParent) {
      setErrorMessage("Please select a parent first.");
    } else {
      onChildChange(childName);
      setErrorMessage("");
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label
          htmlFor="parent-select"
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          Select Parent:
        </label>
        <select
          id="parent-select"
          value={selectedParent?.name || ""}
          onChange={(e) => handleParentChange(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="" disabled>
            Select a parent
          </option>
          {data.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="child-select"
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          Select Child:
        </label>
        <select
          id="child-select"
          value={selectedChild || ""}
          onChange={(e) => handleChildChange(e.target.value)}
          disabled={!selectedParent}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
        >
          <option value="" disabled>
            {selectedParent ? "Select a child" : "No parent selected"}
          </option>
          {selectedParent?.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default DependentDropdown;
