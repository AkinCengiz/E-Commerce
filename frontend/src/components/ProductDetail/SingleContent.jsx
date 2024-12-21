import React from "react";
import ProductGallery from "./Gallery/ProductGallery";
import ProductInfo from "./Info/ProductInfo";


const SingleContent = ({singleProduct}) => {
  return (
    <div className="single-content">
      <main className="site-main">
        <ProductGallery singleProduct={singleProduct} />
        <ProductInfo singleProduct={singleProduct} />
      </main>
    </div>
  );
};

export default SingleContent;
