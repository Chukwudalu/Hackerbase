import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <StyledNav>
            <Link to='/'><h2>Hackerbase</h2></Link>
            <ul>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11.6rem 0 10rem;
    min-height: 10vh;
    /* position: fixed;
    width: 100vw; */
    z-index: 1;
    color: white;

    h2{ 
        font-size: 3rem;
        color: #c9ada7;
        font-family: 'Architects Daughter', cursive;
    }

    ul{
        list-style: none;
        display: flex;
        font-size: 2rem;
        font-family: 'Architects Daughter', cursive;
    }

    li{
        margin-left: 20px
    }

    a{
        text-decoration: none;
        color: white;

        &:hover{
            color: #c9ada7
        }

        &:focus{
            color: #c9ada7
        }
    }
`

export default Nav;


