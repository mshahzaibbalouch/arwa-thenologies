import React from 'react';
import '../css/ButtonStyle.css';
// import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const ButtonStyle = ({title, onChlickFunction}) => {
  return (
    <Button to='/' onClick={onChlickFunction} className='btn btn-primary border border-2 border-primary hover-change-bg bg-dark rounded-4 w-100 text-white px-5 py-3'>
        {title}
    </Button>
  )
}

export default ButtonStyle;