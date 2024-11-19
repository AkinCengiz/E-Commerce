import React from 'react'
import Header from '../components/Layout/header/Header'
import Policy from '../components/Layout/policy/Policy'
import Footer from '../components/Layout/footer/Footer'
import Blogs from '../components/Blogs/Blogs'

const BlogList = () => {
  return (
    <>
        <Header />
        <Blogs />
        <Policy />
        <Footer />
    </>
  )
}

export default BlogList