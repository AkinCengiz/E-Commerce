import React from 'react'
import "./Cart.css"
import CartProgress from './CartProgress'
import CartTable from './CartTable'
import CartCoupon from './CartCoupon'
import CartTotals from './CartTotals'

const Cart = () => {
  return (
    <section class="cart-page">
        <div class="container">
            <div class="cart-page-wrapper">
                <form class="cart-form">
                    <CartProgress />
                    <div class="shop-table-wrapper">
                        <CartTable />
                        <CartCoupon />
                    </div>
                </form>
                <div class="cart-collaterals">
                    <CartTotals />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart