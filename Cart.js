import { useContext } from "react";
import { appContext } from "./App";
const Cart=()=>{
    const appCtx=useContext(appContext);
    // console.log(appCtx.addToCart);

return(
    <div className="crt">
        {/* <h1>{appCtx.addToCart}</h1> */}
        <h1>CART LIST</h1>
        {/* <div className="cartlist">
            <h3 className="cartItems">Product Name:</h3>
            <h3 className="cartItems">Quantity:</h3>
            <h3 className="cartItems">Amount:</h3>
        </div> */}
        <ul>{appCtx.addToCart.map(
            (product)=>(<div key={product.id}>
            <div>
            <h3 className="cartItems">Product:{product.product}</h3>
            <h3 className="cartItems">Quantity:{product.quantity}</h3>
            <h3 className="cartItems">Amount:{product.amount}</h3>
            </div>
            </div>))}
        </ul>
    </div>
);
}
export default Cart;
