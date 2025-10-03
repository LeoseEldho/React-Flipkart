import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

          <Header />
          <Body />

    </>
  );
}

export default App;
