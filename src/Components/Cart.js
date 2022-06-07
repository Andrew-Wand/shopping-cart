import { React } from "react";
import  CartItem  from "./CartItem";

function Cart(props) {
    

    function clearCart() {
        props.setAddItem([]);
        props.setUpdateCart(0);
    }

    function checkout() {
        props.setAddItem([]);
        props.setUpdateCart(0);
        let item = document.querySelector('.Items');
        item.textContent = 'derp!'
    }



    function handleClick(e) {
        const index = e.target.id;
        props.addItem.splice(index, 1);
        props.setUpdateCart(props.updateCart - 1);
    }








    return (
        <div>
            <div className="cart-container">
                <div className="Items">
                    {
                        props.addItem.map((item, index) => (
                            <CartItem name={item.name} price={item.price} id={index} removeItem={handleClick} />
                        ))
                    }
                </div>

                <div className="cart-btns">
                    <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
                    <button onClick={checkout} className='checkout-btn'>Checkout</button>
                </div>
            </div>
        </div>
    )



}



export default Cart;