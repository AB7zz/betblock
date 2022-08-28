import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Footer = styled.div`
    background: white;
    height: 40px;
    width: 100%;
`
export const FooterElement = styled.div`
    display: flex;
    padding: 20px 70px 10px 70px;
    justify-content: space-between;
`
const index = () => {
  return (
    <Footer>
        <FooterElement>
            <div style={{display: 'flex'}}>
                <CopyrightIcon sx={{color: '#0069FF'}}/> <p style={{color: '#0069FF'}}>2022 Decent Blocks Inc. All rights reserved</p>
            </div>
            <div style={{display: 'flex'}}>
                <InstagramIcon sx={{color: '#0069FF'}}/>
                <FacebookIcon sx={{color: '#0069FF'}}/>
                <TwitterIcon sx={{color: '#0069FF'}}/>
            </div>
        </FooterElement>
    </Footer>
  )
}

export default index