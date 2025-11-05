import { createContext, useEffect, useState } from "react";
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
  const [allData,setAllData]=useState([])
    const fetchData =async () => {
    let res=await fetch("/ScrollData.json")
    let data=await res.json()
    setAllData(data)
  }
  useEffect(()=>{

    fetchData()
  },[])
  return (
    <FilterContext.Provider value={{ filters,defaultFilters, setFilters, sort, setSort,priceSteps,allData }}>
      {children}
    </FilterContext.Provider>
  );
};
//sdfew   sdfewsdfew   sdfewsdfew