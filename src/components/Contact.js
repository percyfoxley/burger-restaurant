import React from 'react'
import styled from 'styled-components'
import { Button } from './Product';

const ContactContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    background-color:rgba(245,69,40,0.55);
    color:#fff;
    justify-content:space-evenly;
    & > h1{
        align-self:center;
        font-size:clamp(2em,6vw,6em);
        font-weight:bold;
        font-family: 'Archivo', sans-serif;
    }
`;
const Button2 = styled(Button)`
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    font-family: 'Nunito', sans-serif;
    &:hover{
        transform:none;
    }
`;
const ContactInputs = styled.div`
    display:flex;
    align-self:center;
    & > input[type=text]{
        margin:1em 0;
        padding:0.625em 2.75em;
        width:clamp(11.75em,20vw,20em);
        border-radius:3.75em;
        font-weight:600;
        font-size:clamp(0.75em,1vw,2em);
        justify-content:center;
        border:none;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
        font-family: 'Nunito', sans-serif;
        transition: all .2s ease-in-out;
        &:focus{
            outline:none;
            border-color:#fff;
            box-shadow:0 0 10px #fff;
        }
    }
`;

export default function Contact() {
    return (
        <ContactContainer id='Contact'>
            <h1>Don't miss Our Update</h1>
            <ContactInputs>
                <input type='text' placeholder='E mail'/>
                <Button2>Subscribe</Button2>
            </ContactInputs>
        </ContactContainer>
    )
}
