import React, { useContext, useEffect, useState } from "react";
import { message } from "antd";
import { loadStripe} from "@stripe/stripe-js"
import { CartContext } from "../../contexts/CartProvider";

const CartTotals = () => {
  const { cartItems, calculatePrice, couponDiscount,setCouponDiscount } = useContext(CartContext);
  const [ fastCargo, setFastCargo] = useState(false);
  //console.log(cartItems)
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  
  const totalPrice = cartItems.map(product => {
    return calculatePrice(product);
  })
  const cargoPrice = 15.00;
  //console.log(totalPrice);

  const PUBLIC_KEY = "pk_test_51QbLj3GhhH6gzdTXTJTSrGXyGBXjzPTXEKp1eK6PVyC7zkNaf30reMgBY0SdCdwnh2MKyaivjJcUdU8GYC1Kxmrc00mQNLiWGd"

  const handlePayment = async () => {

    if(!user){
      return message.info("Ödeme işlemleri için giriş yapmanız gerekmektedir...");
    }

    const body = {
      products : cartItems,
      totalPrice : result,
      user : user,
      cargoFee : fastCargo ? cargoPrice : 0
    };
    try {
      const stripe = await loadStripe(PUBLIC_KEY);

      const response = await fetch(`http://localhost:5000/api/payment`,{
        method : "POST",
        headers : { "Content-type" : "application/json"},
        body : JSON.stringify(body)
      });
      if(!response.ok){
        return message.error("Ödeme işlemi başarısız...");
      }

      const data = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId : data.id
      })

      if(result.error){
        throw new Error(result.error.message)
      }


    } catch (error) {
      console.log(error)
    }
  }
  
  let result = totalPrice.reduce((prev,current) => {
         return prev + current;
       },0);
  result = result * (1 - couponDiscount / 100);
  //console.log("Get Total Price : ", result)
  //console.log(fastCargo);

  useEffect(()=> {
    setCouponDiscount(0);
  }, window.location.pathname);

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
        <button class="btn btn-lg" type="button" onClick={handlePayment}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
