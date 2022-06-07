import { React } from "react";

function CartItem(props) {
    return (
        
        <div className="item" id={props.id} key={1}>
            <p>{props.name}</p>
            <p> {props.price}</p>
            <button className="remove-btn" onClick={props.removeItem} id={props.id}>Remove</button>
        </div>
    )
}

export default CartItem;