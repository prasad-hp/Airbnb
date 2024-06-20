import React from 'react'
import Header from '../components/Header'
import CardLayout from '../components/CardLayout';
import Footer from '../components/Footer';
import NavBarMobile from '../components/NavBarMobile';

function Landing() {
  return (
    <div>
        <Header />
        <CardLayout />
        <NavBarMobile />
        <Footer />
    </div>
  )
}

export default Landing;