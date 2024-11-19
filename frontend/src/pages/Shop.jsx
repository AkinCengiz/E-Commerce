import React from 'react'
import Header from '../components/Layout/header/Header'
import Policy from '../components/Layout/policy/Policy'
import Footer from '../components/Layout/footer/Footer'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import ProductSingle from '../components/Products/ProductSingle'

const Shop = () => {
  return (
    <>
        <Header />
        <Categories />
        <Products />
        <CampaignSingle />
        <ProductSingle />
        <Policy/>
        <Footer/>
    </>
  )
}

export default Shop