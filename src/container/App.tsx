import React from 'react';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import MainContent from './style';

const App: React.FC = () => {


  return (
    <MainContent>
      <Nav />
      <Home />
    </MainContent>
  );
}

export default App;
