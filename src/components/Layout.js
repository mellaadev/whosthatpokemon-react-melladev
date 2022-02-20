import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children , setDark}) => {
  return (
    <>
        <Header 
          setDark={setDark}
        />
            {children}
        <Footer />
    </>
  )
}

export default Layout