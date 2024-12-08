import React, { useEffect, useState } from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem";
import { message } from "antd";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if(response.ok){
          const data = await response.json();
          setCategories(data);
        }else{
          message.error("Categoriler getirilirken bir sorun meydana geldi...");
        }
      } catch (error) {
        console.log("Sunucu hatası...");
      }
    }
    getCategories();
    console.log(categories)
  },[setCategories]);
  return (
    <div>
      <section className="categories">
        <div className="container">
          <div className="section-title">
            <h2>All Categories</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <ul className="category-list">
            {
              categories.map((category) => (
                <CategoryItem key={category._id} category={category}/>
              ))
            }
            
            {/* <li className="category-item">
              <a href="#">
                <img
                  src="img/categories/categories1.png"
                  alt=""
                  className="category-image"
                />
                <span className="category-title">Smartphone</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <img
                  src="img/categories/categories2.png"
                  alt=""
                  className="category-image"
                />
                <span className="category-title"> Watches </span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <img
                  src="img/categories/categories3.png"
                  alt=""
                  className="category-image"
                />
                <span className="category-title"> Electronics </span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <img
                  src="img/categories/categories4.png"
                  alt=""
                  className="category-image"
                />
                <span className="category-title"> Furnitures </span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <img
                  src="img/categories/categories5.png"
                  alt=""
                  className="category-image"
                />
                <span className="category-title"> Collections </span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <img
                  src="img/categories/categories6.png"
                  alt=""
                  className="category-image"
                />
                <span className="category-title"> Fashion </span>
              </a>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Categories;
