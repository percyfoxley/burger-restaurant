import React from 'react'
import styled from 'styled-components'
import { PromoContiner } from './Promo'


const FooterContainer = styled(PromoContiner)`
    min-height:60vh;
    flex-direction:row;
    background-color:#222;
    padding:0 3vw;
    color:#fff;
    justify-content:space-between;
    align-items:center;
`;
const LinkColumn = styled.div`
    display:flex;
    flex-direction:column;
    line-height:0;
    margin:0 2vw;
    & > p{
        font-family: 'Nunito', sans-serif;
        text-align:left;
        line-height:1.6;
        font-size:clamp(1em,1vw,1.5em);
        width:40vw;
    }
    & > h3{
        font-family: 'Archivo', sans-serif;
        font-size:clamp(1.5em,2vw,2.5em);
        font-weight:700;
    }
    & > a{
        font-family: 'Nunito', sans-serif;
        font-size:clamp(1em,1vw,1.250em);
        line-height:1.6;
        letter-spacing:clamp(0.125em,1vw,0.225em);
        text-decoration:none;
        cursor:pointer;
    }
    
`;
/*const LogoSection = styled.div`
    

`;*/
const LinkRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    & > img{
        width:clamp(2.1875em,6.5%,1.825em);
        height:clamp(2.1875em,6.5%,1.825em);
        margin:0 0 0 1vw;
    }
    & > img:first-child{
        margin:0;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <LinkRow>
                <LinkColumn>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>               
                    <LinkRow>
                    <img src='/Instagram.png'/>
                    <img src='/Facebook.png'/>
                    <img src='/Twitter.png'/>
                    <img src='/WhatsApp.png'/>
                    </LinkRow>
                </LinkColumn>
                
            </LinkRow>
            <LinkRow>
                <LinkColumn>
                    <h3>About</h3>
                    <a>History</a>
                    <a>Our Team</a>
                    <a>Brand Guidelines</a>
                    <a>Terms & Condition</a>
                    <a>Privacy Policy</a>
                </LinkColumn>
                <LinkColumn>
                    <h3>Services</h3>
                    <a>How to Order</a>
                    <a>Our Products</a>
                    <a>Order Status</a>
                    <a>Promo</a>
                    <a>Payment Method</a>
                </LinkColumn>
                <LinkColumn>
                    <h3>Other</h3>
                    <a>Contact Us</a>
                    <a>Help</a>
                    <a>Privacy</a>
                </LinkColumn>
            </LinkRow>
        </FooterContainer>
    )
}
