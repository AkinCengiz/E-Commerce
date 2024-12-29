import React, { useContext } from "react";
import { InputNumber } from "antd"
import { CartContext } from "../../contexts/CartProvider";

const CartTable = () => {
  const { cartItems, removeFromCart,addToCart } = useContext(CartContext)
  return (
    <table class="shop-table">
      <thead>
        <th class="product-thumbnail">&nbsp;</th>
        <th class="product-thumbnail">&nbsp;</th>
        <th class="product-name">Product</th>
        <th class="product-price">Price</th>
        <th class="product-quantity">Quantity</th>
        <th class="product-subtotal">Subtotal</th>
      </thead>
      <tbody class="cart-wrapper">
        {
          cartItems.map(product => {
            const unitPrice = product.price * (1 - product.discount); 
            return(
            <tr class="cart-item">
              
              <td></td>
              <td class="cart-image">
                <img src={product.img[0]} alt="" />
                <i class="bi bi-x delete-cart" onClick={() => removeFromCart(product._id)}></i>
              </td>
              <td>{product.name}</td>
              <td>${unitPrice.toFixed(2)}</td>
              {/* <td class="product-quantity">{product.quantity}</td> */}
              <td><InputNumber min={1} max={100} defaultValue={product.quantity} onChange={(value) => addToCart(product,value)} /></td>
              <td class="product-subtotal">${(unitPrice * product.quantity).toFixed(2)}</td>
            </tr>)
          })
        }
      </tbody>
    </table>
  );
};

export default CartTable;
