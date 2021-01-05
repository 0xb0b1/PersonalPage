import styled, { keyframes } from 'styled-components';

const blinkText = () => {
    return keyframes`
        50% {
            opacity: 0;
        }
    `
}
const MainContent = styled.div`
    animation: ${blinkText} 3s linear infinite;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1 {
        font-size: 4vw;
        text-align: center;
    }

    @media screen only and (max-width: 800px) {
        h1 {
            font-size: 5vw;
        }
    }
`;

export default MainContent;
