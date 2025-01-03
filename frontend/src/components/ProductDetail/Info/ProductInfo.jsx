import React, { useContext, useEffect, useState } from 'react'
import { InputNumber } from "antd"
import "./ProductInfo.css"
import { CartContext } from '../../../contexts/CartProvider';

const ProductInfo = ({singleProduct}) => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext)
  useEffect(()=> {
    setProduct(singleProduct);
  },singleProduct)
  console.log(singleProduct)

  const [amount, setAmount] = useState(1);

  return (
    <div className="product-info">
          <h1 className="product-title">{product?.name}</h1>
          <div className="product-review">
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
            <span>2 reviews</span>
          </div>
          <div className="product-price">
            <s className="old-price">${product?.price.toFixed(2)}</s>
            <strong className="new-price">${(product?.price - (product?.price * product?.discount)).toFixed(2)}</strong>
          </div>
          <p className="product-description">
            {product?.description}
          </p>
          <form className="variations-form">
            <div className="variations">
              <div className="colors">
                <div className="colors-label">
                  <span>Color</span>
                </div>
                <div className="colors-wrapper">
                  {
                    product?.colors.map((color,index) => {
                      return (
                        <div className="color-wrapper" key={index}>
                        <label className={`${color}-color`}>
                          <input type="radio" name="product-color" />
                        </label>
                      </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="values">
                <div className="values-label">
                  <span>Size</span>
                </div>
                <div className="values-list">
                  {
                    product?.sizes.map((size,index) => {
                      return (
                        <span className="" key={index}>{size}</span>
                      )
                    })
                  }
                  {/* <span className="active">XS</span>
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span> */}
                </div>
              </div>
              <div className="cart-button">
              <td><InputNumber min={1} max={100} defaultValue={amount} onChange={(value) => setAmount(value)} /></td>
                <button
                  className="btn btn-lg btn-primary"
                  id="add-to-cart"
                  type="button"
                  onClick={() => addToCart(product,amount)}
                >
                  Add to cart
                </button>
              </div>
              <div className="product-extra-buttons">
                <a href="#">
                  <i className="bi bi-globe"></i>
                  <span>Size Guide</span>
                </a>
                <a href="#">
                  <i className="bi bi-heart"></i>
                  <span>Add to Wislist</span>
                </a>
                <a href="#">
                  <i className="bi bi-share"></i>
                  <span>Share this Product</span>
                </a>
              </div>
            </div>
          </form>
          <div className="divider"></div>
          <div className="product-meta">
            <div className="product-sku">
              <span>SKU:</span>
              <strong>{product?.stockCode}</strong>
            </div>
            <div className="product-categories">
              <span>Categories:</span>
              <strong>Pants , Women</strong>
            </div>
            <div className="product-tags">
              <span>Tags:</span>
              <a href="#">black</a>,<a href="#">white</a>
            </div>
          </div>
        </div>
  )
}

export default ProductInfo