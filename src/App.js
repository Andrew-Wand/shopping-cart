import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import  Header  from "./Components/Header";
import  Home  from "./Components/Home";

function App() {
  
  
  const [updateCart, setUpdateCart] = useState(0);
  const [addItem, setAddItem] = useState([]);
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header updateCart={updateCart} />

        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>


        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
