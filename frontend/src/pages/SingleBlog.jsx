import React from 'react'
import Header from '../components/Layout/header/Header'
import Policy from '../components/Layout/policy/Policy'
import Footer from '../components/Layout/footer/Footer'
import BlogDetail from '../components/BlogDetail/BlogDetail'

const SingleBlog = () => {
  return (
    <>
        <Header />
        <BlogDetail />
        <Policy />
        <Footer />
    </>
  )
}

export default SingleBlog