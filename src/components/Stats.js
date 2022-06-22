import React from 'react'
import styled from 'styled-components'

const StatsContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    background-color:#f64b3c;
    color:#fff;
    justify-content:space-evenly;   
    & > h3{
        font-family: 'Archivo', sans-serif;
        font-size:clamp(1.250em,100vw,3em);
        font-weight:600;
        align-self:center;
    }
    & > p{
        margin:0 20vw;
        font-family: 'Montserrat', sans-serif;
        font-size:clamp(0.500em,100vw,1.250em);
        align-self:center;
    }
`;
const Statistics = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    & > div{
        margin:3vw 1vw;
        display:flex;
        flex-direction:column;
        justify-content:center;
        border-width:0.325em;
        border-style:solid;
        border-radius:50%;        
        width:clamp(3em,40vw,20em);
        height:clamp(3em,40vw,20em);
        text-align:center;
        line-height:1.2;
        & > h4{
            font-family: 'Archivo', sans-serif;
            margin:0 auto;
            font-size:clamp(1em,10vw,6em);
            font-weight:bold;
        }
        & > p{
            font-family: 'Montserrat', sans-serif;
            margin:0 auto;
            text-transform:uppercase;
            font-size:clamp(1em,5vw,3em);
            font-weight:700;
        }
    }
    
`;

export default function Stats() {
    return (
        <StatsContainer id='Stats'>
            <h3>Statistics</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit porta velit, sit amet pulvinar leo efficitur at. Morbi sagittis, ante et facilisis pharetra, dui nisi elementum lorem, euismod gravida libero leo eget enim.</p>
            <Statistics>
                <div>
                    <h4>7k</h4>
                    <p>customer</p>
                </div>
                <div><h4>104</h4>
                    <p>Outlets</p></div>
                <div>
                    <h4>35</h4>
                    <p>Country</p>
                </div>
            </Statistics>
        </StatsContainer>
    )
}
