import React from 'react'
import styled from 'styled-components'
import { Button } from './Product';

export const PromoContiner = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
    background-color:#f6eedf;
    justify-content:space-evenly;
    color:#f64b3c;
    z-index:0;
    & > h1{
        align-self:center;
        font-size:clamp(2em,6vw,6em);
        font-weight:bold;
    }    
`;
const CardSection = styled.div`
    display:flex;    
    flex-wrap:wrap;
    justify-content:space-evenly;  
    margin-bottom:clamp(3em,5vw,2em);
`;
const PromoCard = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:10px;
    background-color:#fff;
    margin:1vw 0;
    width:20em;
    object-fit:cover;
    transition: all .2s ease-in-out;
    &:hover{
        transform:scale(1.1);
    }
    & > a{
        font-family: 'Archivo', sans-serif;
        margin:1vw 0;
        font-size:clamp(1.5em,1vw,2.250em);
        font-weight:bold;
        text-transform:uppercase;
    }
    & > img{
        margin:1vw 0;
        width:clamp(4.275em,10vw,6em);
    }
    & > p{
        font-family: 'Montserrat', sans-serif;
        text-align:center;
        font-size:clamp(0.825em,1vw,1.250);
        font-weight:550;
    }
`;
export default function Promo() {
    return (
        <PromoContiner id='Product'>
            <h1>Popular Package</h1>
            <CardSection>
                <PromoCard>
                    <a>Package I</a>
                    <img src='/Icon.png'/>
                    <a>$20.00</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button>Order Now</Button>
                </PromoCard>
                <PromoCard>
                    <a>Package II</a>
                    <img src='/Icon.png'/>
                    <a>$20.00</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button>Order Now</Button>
                </PromoCard>
                <PromoCard>
                    <a>Package III</a>
                    <img src='/Icon.png'/>
                    <a>$20.00</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button>Order Now</Button>
                </PromoCard>
            </CardSection>
        </PromoContiner>
    )
}
