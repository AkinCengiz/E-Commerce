import React from 'react'
import "./CategoryItem.css"

const CategoryItem = ({category}) => {
  return (
    <div>
        <li className="category-item">
              <a >
                <img
                  src={category.image}
                  alt=""
                  className="category-image"
                />
                <span className="category-title">{category.name}</span>
              </a>
        </li>
    </div>
  )
}

export default CategoryItem