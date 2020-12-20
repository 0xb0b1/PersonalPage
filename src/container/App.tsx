import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MainContent from './style'

const App: React.FC = () => {

  return (
    <MainContent>
      <Header />
      <Footer />
    </MainContent>
  );
}

export default App
