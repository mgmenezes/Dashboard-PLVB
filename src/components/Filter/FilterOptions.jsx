import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";

const FilterOptions = () => {
  const [period, setPeriod] = useState("month");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectPeriod = (newPeriod) => {
    setPeriod(newPeriod);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative inline-block text-left">
        <div className="flex items-center sm:flex-row ">
          <Filter size={16} className="mr-2 text-gray-500" />
          <span className="mr-2 text-sm text-gray-700">Período:</span>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-between items-center w-32 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            {period === "day" && "Diário"}
            {period === "week" && "Semanal"}
            {period === "month" && "Mensal"}
            <ChevronDown size={16} className="-mr-1 ml-2" />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              onClick={() => selectPeriod("day")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Diário
            </a>
            <a
              href="#"
              onClick={() => selectPeriod("week")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Semanal
            </a>
            <a
              href="#"
              onClick={() => selectPeriod("month")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Mensal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
