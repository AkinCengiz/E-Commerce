import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  // const addToCart = (cartItem) => {
  //   setCartItems([...cartItems,cartItem]);
  // }
  //console.log(cartItems);
  useEffect(()=> {
    const getProducts = async() => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if(response.ok){
          const data = await response.json();
          console.log(data);
          setProducts(data);
        }else{
          console.log("Ürünler getirilirken hata meydana geldi...");
        }
      } catch (error) {
        console.log("Sunucu hatası...");
      }
    }
    getProducts();
  },[setProducts]);
  return (
    <div>
        <section className="products">
    <div className="container">
      <div className="section-title">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <div className="product-wrapper product-carousel">
        <div className="glide__track">
          <ul className="product-list glide__slides" id="product-list">
            {
              
              products.map(product => (
                <ProductItem product={product} key={product._id}/>
              ))
            }
          </ul>
        </div>
        <div className="glide__arrows">
          <button className="glide__arrow glide__arrow--left">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Products;
