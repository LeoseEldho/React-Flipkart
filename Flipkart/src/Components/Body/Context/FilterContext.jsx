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
  const priceSteps=["0","500","2000","5000","10000","20000","20000+"]
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState("Relavance");

  return (
    <FilterContext.Provider value={{ filters,defaultFilters, setFilters, sort, setSort,priceSteps }}>
      {children}
    </FilterContext.Provider>
  );
};


// sdfsdf  sdfewsdfewsdfew   gdfgdf   dfgrefdgredfgre