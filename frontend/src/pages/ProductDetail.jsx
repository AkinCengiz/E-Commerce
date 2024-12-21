import React, { useEffect, useState } from 'react'
import SingleProductDetail from '../components/ProductDetail/SingleProductDetail'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const {id : productId } = useParams();

  useEffect(()=> {
    const getSingleProduct = async() => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);

        if(!response.ok){
          throw new Error("Ürün getirilirken bir hata meydana geldi...");
        }
        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Sunucu hatası...");
      }
    };
    getSingleProduct();
    window.scrollTo(0,0);
  },productId);

  return (
    <SingleProductDetail singleProduct={singleProduct}/>
  )
}

export default ProductDetail