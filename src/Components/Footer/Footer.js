import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #282c34;
    color: red;
`;

const FooterCont = styled.div `
    display: flex;
    width: 20%;
    flex-direction: row;
`;

const FooterLogo = styled.img `
    max-height: 3rem;
`;

const Footer = () => { 
    return (
        <FooterDiv>
            <FooterCont>
                <FooterLogo className="footer-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="NASA logo" /><p>&copy; NASA</p>
            </FooterCont>
        </FooterDiv>
    );
};

export default Footer;