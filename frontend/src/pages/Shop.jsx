import React from 'react'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import ProductSingle from '../components/Products/ProductSingle'

const Shop = () => {
  return (
    <>
        <Categories />
        <Products />
        <CampaignSingle />
        <ProductSingle />
    </>
  )
}

export default Shop