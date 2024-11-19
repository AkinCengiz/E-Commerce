import React from "react";
import ProductGallery from "./Gallery/ProductGallery";
import ProductInfo from "./Info/ProductInfo";


const SingleContent = () => {
  return (
    <div className="single-content">
      <main className="site-main">
        <ProductGallery />
        <ProductInfo />
      </main>
    </div>
  );
};

export default SingleContent;
