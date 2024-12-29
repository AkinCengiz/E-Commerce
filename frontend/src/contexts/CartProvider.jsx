import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [couponDiscount, setCouponDiscount] = useState(0);

  const calculatePrice = (product) => {
    return (product.price - product.price * product.discount) * product.quantity;
  };

  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (cartItem) => {
  //   setCartItems([...cartItems, cartItem]);
  // };

  const addToCart = (cartItem,amount = 0) => {

    const isTrue = cartItems.some(x => x._id === cartItem._id);

    if(!isTrue){
      setCartItems((prev) => [
        ...prev,
        {
          ...cartItem,
          quantity : amount > 0 ? amount : 1
        }
      ]);
    }else{
      const updatedCart = cartItems.map(item => {
            if(item._id === cartItem._id){
              item.quantity = amount > 0 ? amount : item.quantity + 1;
              return item;
            }
            return item;
          });
          setCartItems(updatedCart);
    }
  }

  const removeFromCart = (productId) => {
    const filterCarts = cartItems.filter((item) => {
      return productId !== item._id;
    });
    setCartItems(filterCarts);
    setCouponDiscount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addToCart,
        setCartItems: setCartItems,
        removeFromCart,
        calculatePrice: calculatePrice,
        couponCode,
        setCouponCode,
        couponDiscount,
        setCouponDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
