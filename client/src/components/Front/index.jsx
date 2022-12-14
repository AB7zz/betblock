import * as React from 'react';
import './style.css';
import Button from '@mui/material/Button';

export default function Front() {
  const boxSX = {
    "&:hover": {
      color: 'white'
    },
  };
  return (
    
      <div className='banner'>
        <div className='banner-txt'>
            <h3 className='icon-txt'>BetBlock</h3>
        </div>        
        <div className='banner-txt2'>
          <h3 className='icon-txt2'>It's Your Turn To</h3>
        </div>
        <div className='banner-txt2'>
          <h1 style={{fontSize: 120, color: 'white'}}>Bet</h1>
        </div>
        <div className='banner-txt3'>
          <Button href='/bet' sx={boxSX} variant="contained">Bet now !</Button>
        </div>
      </div>
      

  );
}