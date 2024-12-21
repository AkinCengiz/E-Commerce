import React, { useEffect, useState } from "react";
import "./ProductGallery.css";
 
const ProductGallery = ({ singleProduct }) => {
  const [productImages, setProductImages] = useState(singleProduct?.img || []);
  const [activeImage, setActiveImage] = useState(singleProduct?.img[0] || "");
 
  useEffect(() => {
    if (singleProduct?.img) {
      setProductImages(singleProduct.img);
      setActiveImage(singleProduct.img[0]);
    }
  }, [singleProduct]);
 
  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };
 
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img
          src={`/${activeImage}`}
          id="single-image"
          alt="Product main view"
        />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            {productImages.length > 0 &&
              productImages.map((image, index) => (
                <li
                  key={index}
                  className={`glide__slide ${image === activeImage ? "glide__slide--active" : ""}`}
                  style={{ width: "109px", marginRight: "5px" }}
                >
                  <img
                    src={`/${image}`}
                    alt={`Product thumbnail ${index + 1}`}
                    className="img-fluid"
                    onClick={() => handleThumbnailClick(image)}
                  />
                </li>
              ))
            }
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default ProductGallery;
 
