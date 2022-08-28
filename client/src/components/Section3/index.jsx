import React from 'react'
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import stadium from '../../assets/stadium.png'
import './style.css'

export const BlackBG = styled.div`
    background: black;
    height: 500px;
    
`;

export const TopPara = styled.p`
    color: white;
    font-family:"Encode Sans",sans-serif;

`

export const MidPara = styled.h1`
    color: white;
    font-family:"Encode Sans",sans-serif;
    font-weight: bold;  
    font-size: 50px;

    @media screen and (max-width: 1010px){
        font-size: 45px;
    }

    @media screen and (max-width: 885px){
        font-size: 40px;
    }
`

export const LastPara = styled.p`
    color: white;
    font-family:"Encode Sans",sans-serif;
    font-size: 20px;
    @media screen and (max-width: 1010px){
        font-size: 17px;
    }
    @media screen and (max-width: 885px){
        font-size: 15px;
    }
`



const Section3 = () => {
  return (
    <>
        <BlackBG>
            <div className='d-flex p-3'>
                <div className='p-5'>
                    <TopPara>BetBlock</TopPara>
                    <MidPara>The global decentralized sports betting exchange</MidPara>
                    <LastPara>Hey folks! Did you know that the Global Sports Betting Industry is Worth Over $250Bn?</LastPara>
                    {/* <Button sx={{marginRight: 2}} variant="contained">Button</Button>
                    <Button variant="contained">Button</Button> */}
                </div>
                <img className='rightimg' height={450} src={stadium} alt="stadium" />
            </div>
        </BlackBG>
    </>
  )
}

export default Section3