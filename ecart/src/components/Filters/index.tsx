import React, { useEffect, useState } from "react";

export type TFilter = {
  id: number;
  title: string;
  value: string;
  active: boolean;
};

interface FiltersProps {
  options: TFilter[];
  defaultActive?: string[];
  renderButton?: (item: TFilter, onClick: () => void) => React.ReactNode;
  onChange: (values: TFilter[]) => void;
}

const setDefaultFilters = (options: TFilter[], defaultActive: string[]) => {
  return options.map((item) => ({
    ...item,
    active: defaultActive.includes(item.value) || item.active,
  }));
};

const Filters: React.FC<FiltersProps> = ({
  options,
  defaultActive = [],
  renderButton,
  onChange,
}) => {
  const [filter, setFilter] = useState<TFilter[]>(
    setDefaultFilters(options, defaultActive)
  );

  useEffect(() => {
    onChange(filter);
  }, [filter]);

  const onToggle = (value: string) => {
    const updatedFilters = filter.map((item) =>
      item.value === value ? { ...item, active: !item.active } : item
    );
    setFilter(updatedFilters);
  };

  const resetFilters = () => {
    setFilter(options.map((item) => ({ ...item, active: false })));
  };

  return (
    <div>
      {filter.map((item) =>
        renderButton ? (
          renderButton(item, () => onToggle(item.value))
        ) : (
          <button
            key={item.value}
            onClick={() => onToggle(item.value)}
            className={`${
              item.active ? "bg-blue-600 text-white" : "text-blue-500"
            } border-2 border-blue-600 font-semibold text-sm py-2 px-4 rounded-lg m-1`}
          >
            {item.title}
          </button>
        )
      )}
      <button
        onClick={resetFilters}
        className={
          "bg-red-600 text-white border-2 border-red-600 font-semibold text-sm py-2 px-4 rounded-lg m-1"
        }
      >
        Reset
      </button>
    </div>
  );
};

export default Filters;
