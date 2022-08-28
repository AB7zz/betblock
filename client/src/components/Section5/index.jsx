import * as React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './style.css'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/rmvsliverpool.png'
import img2 from '../../assets/barcavsrm.png'
import TextField from '@mui/material/TextField';

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
  // const [openrvl, setOpenrvl] = React.useState(false);
  // const [openbvl, setOpenbvl] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // const rmvsliverpool = () => {
  //   setOpenrvl(true);
  // };

  // const bvsreal = () => {
  //   setOpenbvl(true);
  // };
  // const handleClose = () => {
  //   setOpenrvl(false);
  //   setOpenbvl(false);
  // };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Carousel
    autoPlay = {true}
    showIndicators={false}
    style={{margin: 0}}
    showThumbs={false}
    infiniteLoop={true}
    >
      <div>
          <img src={img1} />
          <Button onClick={handleClickOpen} variant="outlined">Bet Now !</Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Which team do you want to bet on?"}
            </DialogTitle>
            <br />
            <DialogContent>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </DialogContent>
            <DialogActions
            sx = {{justifyContent: 'space-evenly'}}>
              <Button variant='outlined' autoFocus onClick={handleClose}>
                Liverpool
              </Button>
              <Button variant='outlined' onClick={handleClose} autoFocus>
                Real Madrid
              </Button>
            </DialogActions>
          </Dialog>
      </div>
      <div>
          <img src={img2} />
          <Button onClick={handleClickOpen} variant="outlined">Bet Now !</Button>
      </div>
  </Carousel>
  )
}

export default Section5