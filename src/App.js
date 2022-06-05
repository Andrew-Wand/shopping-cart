import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import  Header  from "./Components/Header";
import  Home  from "./Components/Home";
import Shop from './Components/Shop';

function App() {
  
  
  const [updateCart, setUpdateCart] = useState(0);
  const [addItem, setAddItem] = useState([]);
  

  function handleClick(e) {
    setUpdateCart(updateCart + 1);


    // const item = e.target.parentNode.parentNode.childNodes;
    // addItem.push({
    //     name: item[1].textContent,
    //     price: item[2].textContent
    //     }); 
   
  }
  
 
  
  
  
  
  
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header updateCart={updateCart} />

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop'  element={<Shop  handleClick={handleClick} />}/>
        </Routes>

        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
