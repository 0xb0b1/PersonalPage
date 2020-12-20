import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import MainContent from './style'

const App: React.FC = () => {

  return (
    <MainContent>
      <Header />
      <Home />
    </MainContent>
  );
}

export default App
