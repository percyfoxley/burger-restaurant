import React from 'react'
import styled from 'styled-components'

const ProductPage = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    min-height:100vh;
    background-color:${props => props.primary%2 ? "#f64b3c":"#f6eedf"};
    color:${props => props.primary%2 ? "#fff":"#f64b3c"};
    flex-wrap:${props => props.primary%2 ? "wrap":"wrap-reverse"};
`;
const ProductImage = styled.div`
    margin:2vw;
    & > img{
        border-radius:50%;
        width:clamp(280px,50vw,560px);
    }
`;
const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    width:50vw;
    & > h1{
        font-family: 'Archivo', sans-serif;
        font-size:clamp(2em,4vw,3em);
        font-weight:bold;
    }  
    & > p{
        font-family: 'Nunito', sans-serif;
        font-size:clamp(1em,1vw,2em);        
    }
`;
export const Button = styled.button`
    margin:1em 0;
    background-color:${props => props.primary%2 ? "#fff":"#f64b3c"};
    color:${props => props.primary%2 ? "#f64b3c":"#fff"};
    padding:0.625em 2.75em;
    width:clamp(6em,100vw,13em);
    border-radius:3.75em;
    font-weight:bold;
    font-size:clamp(0.675em,1vw,2em);
    text-transform:uppercase; 
    justify-content:center;
    cursor:pointer;
    border:none;
    font-family: 'Montserrat', sans-serif;
    transition: all .2s ease-in-out;
    &:hover{
        border-color:${props => props.primary%2 ? "#fff":"#f64b3c"};
        box-shadow:0 0 10px ${props => props.primary%2 ? "#fff":"#f64b3c"};
        transform:scale(1.035);
    }
`;

export default function Product(props){
    return (
        <>
        {
            props.product.map((element,index)=>
            <>
            {(index+1)%2?
                <ProductPage id='Promo' primary={index+1}>
                    <ProductImage>
                        <img src={element.image} alt={element.title} />
                    </ProductImage>
                    <ProductInfo>
                        <h1>{element.title}</h1>
                        <p>{element.content}</p>
                        <Button primary={index+1}>Order Now</Button>
                    </ProductInfo>
                </ProductPage>
                :
                <ProductPage id='Promo' primary={index+1} key={index+8}>                   
                    <ProductInfo key={index+4}>
                        <h1 key={index+5}>{element.title}</h1>
                        <p key={index+6}>{element.content}</p>
                        <Button primary={index+1}>Order Now</Button>
                    </ProductInfo>
                    <ProductImage>
                        <img src={element.image} alt={element.title}/>
                    </ProductImage>
                </ProductPage>
            }
            </>
            )
        }
        </>
    )
}
