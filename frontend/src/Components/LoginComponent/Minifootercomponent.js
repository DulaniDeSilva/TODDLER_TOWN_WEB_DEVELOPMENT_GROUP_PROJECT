import React from 'react'
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Minifootercomponent() {
  return (
    <div className='minifooter'>
        <Container flex >
        
        {/* <FontAwesomeIcon icon = {faHeart} className='icons'></FontAwesomeIcon> */}
        <FontAwesomeIcon icon= {faFacebook} bounce  className='minifootericons'></FontAwesomeIcon>
        <FontAwesomeIcon icon= {faYoutube} bounce className='minifootericons'></FontAwesomeIcon>
        <FontAwesomeIcon icon= {faInstagram} bounce className='minifootericons' ></FontAwesomeIcon>

        </Container>
    </div>
  )
}
