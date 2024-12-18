import React, { createContext, useState } from 'react'


export const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (cartItem) => {
        setCartItems([...cartItems,cartItem]);
      }
  return (
    <CartContext.Provider value={{
        cartItems:cartItems,
        addToCart:addToCart,
        setCartItems:setCartItems
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider