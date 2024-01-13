import React from 'react';
import '../css/ButtonStyle.css';
import { Button } from 'react-bootstrap';

const ButtonStyle = ({title, onClickFunction}) => {
  return (
    <Button to='/' onClick={onClickFunction} className='btn w-100 btn-outline-primary shadow-none border border-2 border-primary hover-change-bg rounded'>
        {title}
    </Button>
  )
}

export default ButtonStyle;