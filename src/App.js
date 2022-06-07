import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import  Header  from "./Components/Header";
import  Home  from "./Components/Home";
import Shop from './Components/Shop';
import  Cart  from "./Components/Cart";


function App() {
  
  
  const [updateCart, setUpdateCart] = useState(0);
  const [addItem, setAddItem] = useState([]);
  

  function handleClick(e) {
    setUpdateCart(updateCart + 1);


    const storeItem = e.target.parentNode.parentNode.childNodes;
    addItem.push({
        name: storeItem[1].textContent,
        price: storeItem[2].textContent
        }); 
   
  }
  
 
  
  
  
  
  
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header updateCart={updateCart} />

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop'  element={<Shop  handleClick={handleClick} />}/>
            <Route path='/cart' element={<Cart  addItem={addItem} setUpdateCart={setUpdateCart} updateCart={updateCart} setAddItem={setAddItem}/> } />
        </Routes>

        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
