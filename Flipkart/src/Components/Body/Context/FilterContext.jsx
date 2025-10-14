import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Relavance");

  return (
    <FilterContext.Provider value={{ filters, setFilters, sort, setSort }}>
      {children}
    </FilterContext.Provider>
  );
};
