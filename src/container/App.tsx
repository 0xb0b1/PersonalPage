import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MainContent from './style'

const App: React.FC = () => {

  return (
    <MainContent>
      <Header />
      <Home />
      <Contact />
      <Footer />
    </MainContent>
  );
}

export default App
