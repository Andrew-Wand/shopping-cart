import { React } from "react";


function Shop(props) {
     return (
         <div>
            <div className="shop-title">
                <h1>Welcome to the shop!</h1>
                <p>Get your goods here at Andrew's shop of useless stuff!</p>
            </div>

            <div className="shop-container">
                <div className="item">
                    <img src="" alt="" />
                    <p>Item 01</p>
                    <p><span>$</span> 30</p>

                    <div className="add-to-cart">
                        <button onClick={props.handleClick} className="buy-btn">Add to cart</button>
                    </div>
                </div>


            </div>
         </div>
           
        )














}





export default Shop;