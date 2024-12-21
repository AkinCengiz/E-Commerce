import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartProvider';
import PropTypes from "prop-types";
import "./ProductItem.css";

const ProductItem = ({product}) => {
  const {cartItems, addToCart } = useContext(CartContext)
  const navigate = useNavigate();
  //console.log(cartItems);
  return (
    <div>
        <li className="product-item glide__slide">
              <div className="product-image">
                <a href="#">
                  <img src={product.img[0]} alt="" className="img1"/>
                  <img src={product.img[1]} alt="" className="img2"/>
                </a>
              </div>
              <div className="product-info">
                <a href="$" className="product-title">{product.name}</a>
                <ul className="product-star">
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-half"></i>
                  </li>
                </ul>
                <div className="product-prices">
                  <strong className="new-price">${(product.price * (1 - product.discount)).toFixed(2)}</strong>
                  <span className="old-price">${product.price.toFixed(2)}</span>
                </div>
                <span className="product-discount">{product.discount * 100}%</span>
                <div className="product-links">
                  <button onClick={() => addToCart(product)}>
                    <i className="bi bi-basket-fill"></i>
                  </button>
                  <button>
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <a onClick={() => navigate(`productDetail/${product._id}`)}>
                    <i className="bi bi-eye-fill" ></i>
                  </a>
                  <a href={`productDetail/${product._id}`}>
                    <i className="bi bi-share-fill"></i>
                  </a>
                </div>
              </div>
            </li>
    </div>
  )
}

export default ProductItem

// ProductItem.propTypes = {
//   product : PropTypes.object
// }