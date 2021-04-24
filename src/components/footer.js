import React from 'react';
import styled from 'styled-components'


const Footer = () => {
    return (
        <FooterDiv>
            <h4>Developed by Jeremiah Okwuolisa &copy;</h4>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    font-family: 'Architects Daughter', cursive;
    padding: 3rem;
    text-align: center;
    background-color: black;
    color: white;
    font-size: 1.8rem
`

export default Footer;