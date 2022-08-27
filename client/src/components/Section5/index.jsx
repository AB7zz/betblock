import React from 'react'
import './style.css'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Realmadrid from '../../assets/Realmadrid.png'
import Liverpool from '../../assets/Liverpool.png'

export const TopPara = styled.p`
  color: #FF1F00;
`

export const MidPara = styled.h1`
  color: white;
`

export const BtmPara = styled.p`
  color: #EAEAEA;
`
export const VS = styled.h1`
  color: white;
`
const Section5 = () => {
  return (
    <div className="BGCover">
      <Box sx={{ flexGrow: 1, padding: 10 }}>
          <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={Liverpool} alt="real madrid" />
              </Grid>
              <Grid item xs={4}>
                <TopPara>Today's Hot Match</TopPara>
                <MidPara>CHAMPIONS LEAGUE</MidPara>
                <BtmPara>Time 8:30 PM - September 2022</BtmPara>
                <VS>VS</VS>
              </Grid>
              <Grid item xs={4}>
                <img src={Realmadrid} alt="real madrid" />
              </Grid>
          </Grid>
      </Box>
    </div>
  )
}

export default Section5