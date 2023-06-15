import React from 'react'

import styled from 'styled-components'

const Nav = styled.div`
    display:flex;
    flex-wrap:wrap;
    top:0;
    left:0;
    right:0;
    min-height:150px;
    background:linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0));
    color:#FFF;
    align-items:center;
    position:fixed;
    justify-content:space-between;
    padding:0 3em; 
    font-weight:600;
    font-size:clamp(1em,1vw,1.40em);
    text-transform:uppercase;
    letter-spacing:0.1em;
    line-height:1.6;
    z-index:9999;
`;
const NavBrand = styled.div`
    cursor:pointer;
    padding:0 2em;
    & > img {
        min-width:min-content;
    }   
`;
const Navigation = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:fit-content;
    font-weight:600;
    font-family: 'Archivo', sans-serif;
    padding:0 1em;
    & > a{
        text-decoration:none;
        color:#fff;
        padding:0 clamp(1em,1vw,2em);
    }
`;

export default function Navbar() {
    return (
        <Nav>
            <NavBrand>
                <img src='/logo.png' />
            </NavBrand>
            <Navigation>
                <a href='#Home'>Home </a>
                <a href='#Product'>Product</a> 
                <a href='#Promo'>Promo</a> 
                <a href='#About'>About </a>
                <a href='#Contact'>Contact</a>
            </Navigation>
        </Nav>
    )
}
