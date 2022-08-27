import React from 'react'
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import stadium from '../../assets/stadium.png'

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
    
`

export const LastPara = styled.p`
    color: white;
    font-family:"Encode Sans",sans-serif;
`



const Section3 = () => {
  return (
    <>
        <br />
        <BlackBG>
            <Box sx={{ flexGrow: 1, padding: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TopPara>Betting</TopPara>
                        <MidPara>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur obcaecati?</MidPara>
                        <LastPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. </LastPara>
                        <Button sx={{marginRight: 2}} variant="contained">Button</Button>
                        <Button variant="contained">Button</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img height={400} src={stadium} alt="stadium" />
                    </Grid>
                </Grid>
            </Box>
        </BlackBG>
    </>
  )
}

export default Section3