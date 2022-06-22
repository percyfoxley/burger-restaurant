import React from 'react'
import styled from 'styled-components'
import { Button } from './Product';

const LandingPage = styled.div`
    display:flex;    
    min-height:100vh;
    color:#FFF;
    background:url("/test.jpg") center no-repeat fixed;
    background-size:cover;   
`;

const Announcement = styled.div` 
    display:flex;
    flex-direction:column; 
    align-self:center;
    padding:0 6em;
    width:40vw;
    text-align:left;
    & > h1{
        font-family: 'Archivo', sans-serif;
        display:flex;
        font-weight:bold;
        font-size:clamp(2em,6vw,6em);
    }
    & > p{
        font-family: 'Nunito', sans-serif;
        display:flex;
        font-weight:500;
        font-size:clamp(1em,2vw,2em);
    }
    & > a{
        display:flex;
        margin:1em 0;
        background-color:#f64b3c;
        padding:0.625em 2.75em;
        width:clamp(6em,100vw,8em);
        border-radius:3.75em;
        font-weight:bold;
        font-size:clamp(0.75em,1vw,2em);
        text-transform:uppercase; 
        justify-content:center;
        cursor:pointer;
        font-family: 'Montserrat', sans-serif;      
    }
`;
export default function Home() {
    return (
        <LandingPage id='Home'>
            <Announcement>
                <h1>Get Cashback up to 50%</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur justo eu nunc consequat.</p>
                {/*<a>Order Now</a>*/}
                <Button>Order Now</Button>
            </Announcement>           
        </LandingPage>
    )
}
