import React from 'react'
import Header from '../components/Layout/header/Header'
import Policy from '../components/Layout/policy/Policy'
import Footer from '../components/Layout/footer/Footer'
import Search from '../components/Modals/Search'
import Dialog from '../components/Modals/Dialog'

const MainLayout = ({ children }) => {
  return (
    <>
        <Header />
        <Search />
        <Dialog />
        {children}
        <Policy />
        <Footer />
    </>
  )
}

export default MainLayout