import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { HomeContainer } from './styles';

// images
import man from './../images/man.svg';

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <p>Hello World</p>
        </HomeContainer>
    )
}

export default Home;