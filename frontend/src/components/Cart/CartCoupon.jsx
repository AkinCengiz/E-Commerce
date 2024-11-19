import React from "react";

const CartCoupon = () => {
  return (
    <div class="actions-wrapper">
      <div class="coupon">
        <input type="text" class="input-text" placeholder="Coupon code" />
        <button class="btn">Apply Coupon</button>
      </div>
      <div class="update-cart">
        <button class="btn">Update Cart</button>
      </div>
    </div>
  );
};

export default CartCoupon;
