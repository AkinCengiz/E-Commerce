import React from 'react'
import "./Brands.css"
import BrandItem from './BrandItem'

const Brands = () => {
  return (
    <div>
        <section className="brands">
    <div className="container">
      <ul className="brand-list">
        <BrandItem/>
        <li className="brand-item">
          <a href="#">
            <img src="img/brands/brand2.png" alt=""/>
          </a>
        </li>
        <li className="brand-item">
          <a href="#">
            <img src="img/brands/brand3.png" alt=""/>
          </a>
        </li>
        <li className="brand-item">
          <a href="#">
            <img src="img/brands/brand4.png" alt=""/>
          </a>
        </li>
        <li className="brand-item">
          <a href="#">
            <img src="img/brands/brand5.png" alt=""/>
          </a>
        </li>
        <li className="brand-item">
          <a href="#">
            <img src="img/brands/brand1.png" alt=""/>
          </a>
        </li>
      </ul>
    </div>
  </section>
    </div>
  )
}

export default Brands