import React from 'react'
import Header from '../components/Layout/header/Header'
import Policy from '../components/Layout/policy/Policy'
import Footer from '../components/Layout/footer/Footer'
import Auth from '../components/Auth/Auth'

const Account = () => {
  return (
    <>
    <Header />
    <Auth />
    <Policy />
    <Footer />
    </>
  )
}

export default Account