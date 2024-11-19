import React from "react";

const CartTotals = () => {
  return (
    <div class="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr class="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">$316.00</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input type="checkbox" id="fast-cargo" />
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
              <strong id="cart-total">$316.00</strong>
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
