import React from "react";
import styled, { keyframes } from "styled-components";

const logoSpin = keyframes`
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

const HeaderDiv = styled.div `
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Logo = styled.img `
    animation: ${logoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
`;

const Header = () => { 
    return (
        <HeaderDiv>
            <div>
                <Logo className="App-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="NASA logo" />
                <h1>Astronomy Picture of the Day</h1>
            </div>
        </HeaderDiv>
    );
};

export default Header;