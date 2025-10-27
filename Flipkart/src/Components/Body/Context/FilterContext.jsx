import { createContext, useState } from "react";
export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
    const defaultFilters = {
      Brand: [],
      "strap Material": [],
      "strap Color": [],
      "Dial Shape": [],
      Type: [],
      Price: [],
      movement: [],
      occasion: [],
      customerrating: [],
      discount: [],
      fassured: [],
      features: [],
      offers: [],
      collections: [],
      newarrivals: [],
      idealfor: [],
      availabilty: [],
      category: [],
    };
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("Relavance");

  return (
    <FilterContext.Provider value={{ filters,defaultFilters, setFilters, sort, setSort }}>
      {children}
    </FilterContext.Provider>
  );
};


//sdfewsdfewsew  ; 