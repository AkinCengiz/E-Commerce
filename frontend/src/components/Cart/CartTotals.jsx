import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";

const CartTotals = () => {
  const { cartItems, calculatePrice } = useContext(CartContext);
  const [ fastCargo, setFastCargo] = useState(false);
  //console.log(cartItems)
  const totalPrice = cartItems.map(product => {
    return calculatePrice(product);
  })
  const cargoPrice = 15.00;
  //console.log(totalPrice);

  // const getTotalPrice = () => {
  //   const result = totalPrice.reduce((prev,current)=> {
  //     return prev + current;
  //   },0).toFixed();
  // }

  const result = totalPrice.reduce((prev,current) => {
         return prev + current;
       },0);
  //console.log("Get Total Price : ", result)
  //console.log(fastCargo);

  const generalTotals = fastCargo ? (result + cargoPrice).toFixed(2) : result.toFixed(2);
  return (
    <div class="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr class="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${result.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input type="checkbox" id="fast-cargo" checked={fastCargo} onChange={() => setFastCargo(!fastCargo)} />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">${generalTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="checkout">
        <button class="btn btn-lg">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
