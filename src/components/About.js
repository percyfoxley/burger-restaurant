import React from 'react'
import styled from 'styled-components'

const AboutUs = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    min-height:100vh;
    background-color:#f6eedf;
    color:#f64b3c;
    text-align:center;
    padding: 0 6em;
    & > h2{
        font-family: 'Archivo', sans-serif;
        font-size:clamp(2em,7vw,4em);
        font-weight:bold;
    }
    
    & > p{
        font-family: 'Montserrat', sans-serif;
        font-size:clamp(1em,3vw,2em);
    }

`;
const ChefSection = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-top:10px;
    flex-wrap:wrap;
`;
const ChefCard = styled.div`
    margin:3vw 1vw;
    display:flex;
    flex-direction:column;
    align-items:center;    
    & > img{
        border-radius:50%;
        width:clamp(7em,10vw,17em);
    }
    & > h3{
        font-family: 'Archivo', sans-serif;
        font-size:clamp(1.5em,5vw,3em);
        font-weight:bold;
        text-transform:uppercase;
        margin:0;
    }
    & > p{
        font-family: 'Nunito', sans-serif;
        font-weight:500;
        margin:0;
    }
`;


export default function About() {
    return (
        <AboutUs id='About'>
            <h2>Our Chef</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            <ChefSection>
                <ChefCard>
                    <img src='./chef.png' alt='123'/>
                    <h3>Chef 1</h3>
                    <p>Founder</p>
                </ChefCard>
                <ChefCard>
                    <img src='./chef.png' alt='123'/>
                    <h3>Chef 2</h3>
                    <p>Co-Founder</p>
                </ChefCard>
                <ChefCard>
                    <img src='./chef.png' alt='123'/>
                    <h3>Chef 3</h3>
                    <p>Co-Founder</p>
                </ChefCard>
            </ChefSection>
        </AboutUs>
    )
}
