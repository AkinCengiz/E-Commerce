import { message } from "antd"
import  dayjs from "dayjs";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";


const CartCoupon = () => {

  const { couponCode, setCouponCode,setCouponDiscount } = useContext(CartContext)
//   const updateCoupon = async ((req,res) => {
//     const couponRes = await fetch(`http://localhost:5000/api/coupons/${data_id}`,{
//       method : "PUT",
//       body : JSON.stringify(req.body),
//       headers : { "Content-type" : "application/json"}
//     }).then(res => res.json()).then(data => {
//       data.count = data.count + 1
//     })
// });


  const applyCoupon = async () => {
    if(couponCode.trim().length === 0){
      return message.warning("Kupon kodu değeri boş girilemez...");
    }
    try {
      const response = await fetch(`http://localhost:5000/api/coupons/${couponCode}`);

      if(!response.ok){
        return message.warning("Geçersiz kupon kodu...")
      }
      
      const data = await response.json();
      
      if(new Date(data.expired) < Date.now()){
        return message.warning("Girdiğiniz kupon kodunun süresi dolmuştur...");
      }

      if(!data.count > 0){
        return message.warning("Girdiğiniz kupon maksimum kullanım sayısına ulaşmıştır...");
      }
      //data.count = data.count - 1;
      //console.log(data);
      
      await fetch(`http://localhost:5000/api/coupons/${data._id}`,{
        method : "PUT",
        headers : {"Content-type" : "application/json"},
        body : JSON.stringify({...data, count : data.count -1})
      });

      // const updatedCart = cartItems.map(item => {
      //   const updatedUnitPrice = item.price * (1 - (data.discount / 100));
      //   // console.log(updatedUnitPrice)
      //   // console.log(item)
      //   return { ...item, price : updatedUnitPrice}
      // })
      //setCartItems(updatedCart);
      setCouponDiscount(data.discount)
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="actions-wrapper">
      <div class="coupon">
        <input type="text" class="input-text" placeholder="Coupon code" onChange={(e) => setCouponCode(e.target.value)} value={couponCode}/>
        <button class="btn" type="button" onClick={applyCoupon}>Apply Coupon</button>
      </div>
      <div class="update-cart">
        <button class="btn">Update Cart</button>
      </div>
    </div>
  );
};

export default CartCoupon;
