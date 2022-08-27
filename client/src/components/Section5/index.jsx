import React from 'react'
import './style.css'
import styled from 'styled-components'
// import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Realmadrid from '../../assets/Realmadrid.png'
import Liverpool from '../../assets/Liverpool.png'

export const TopPara = styled.p`
  color: #FF1F00;
  font-family:"Encode Sans",sans-serif;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`

export const MidPara = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: bold;
  font-family:"Encode Sans",sans-serif;
  text-align: center;
`

export const BtmPara = styled.p`
  color: #ffff;
  -webkit-text-stroke: 0.5px #0069FF;
  font-family:"Encode Sans",sans-serif;
  text-align: center;
  font-size: 20px;
`
export const VS = styled.h1`
  color: white;
  font-family:"Encode Sans",sans-serif;
  text-align: center;
  font-size: 75px;
`
const Section5 = () => {
  return (
    <div className="BGCover">
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, height: '100%'}}>
        <div className='d-flex'>
          <img className='' src={Liverpool} alt="real madrid" />
          <div>
            <TopPara>Today's Hot Match</TopPara>
            <MidPara>CHAMPIONS LEAGUE</MidPara>
            <BtmPara>Time 8:30 PM - September 2022</BtmPara>
            <VS>VS</VS>
          </div>
          <img className='' src={Realmadrid} alt="real madrid" />
        </div>
        <Button variant="contained">Bet Now !</Button>
      </div>
    </div>
  )
}

export default Section5