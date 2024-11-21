import React from "react";
import Sliders from "../components/Sliders/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import ProductSingle from "../components/Products/ProductSingle";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const Home = () => {
  return (
    <>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <ProductSingle />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </>
  );
};

export default Home;
