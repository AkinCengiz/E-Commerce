import React from "react";

const CartTable = () => {
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
        <tr class="cart-item">
          <td></td>
          <td class="cart-image">
            <img src="img/products/product1/1.png" alt="" />
            <i class="bi bi-x delete-cart" data-id="1"></i>
          </td>
          <td>Analogue Resin Strap</td>
          <td>$108.00</td>
          <td class="product-quantity">1</td>
          <td class="product-subtotal">$108.00</td>
        </tr>
        <tr class="cart-item">
          <td></td>
          <td class="cart-image">
            <img src="img/products/product2/1.png" alt="" />
            <i class="bi bi-x delete-cart" data-id="2"></i>
          </td>
          <td>Ridley High Waist</td>
          <td>$100.00</td>
          <td class="product-quantity">1</td>
          <td class="product-subtotal">$100.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
