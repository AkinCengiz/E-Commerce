import React from 'react'
import Header from '../components/Layout/header/Header'
import Policy from '../components/Layout/policy/Policy'
import Footer from '../components/Layout/footer/Footer'
import SingleProductDetail from '../components/ProductDetail/SingleProductDetail'

const ProductDetail = () => {
  return (
    <>
    <Header />
    <SingleProductDetail />
    <Policy />
    <Footer />
    </>
  )
}

export default ProductDetail