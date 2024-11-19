import React from "react";
import Footer from "../components/Layout/footer/Footer";
import Header from "../components/Layout/header/Header";
import Policy from "../components/Layout/policy/Policy";
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
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <ProductSingle />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
    </>
  );
};

export default Home;
