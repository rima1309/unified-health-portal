import React from 'react';
import '../App.css';
import { Button } from './Button';
import './css/HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  
  return (

    <div className='hero-container'>
      <h1>Welcome to the Patient Portal</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/login' className='text'>Log In</Link> 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/sign-up' className='text'>Register</Link> 
        </Button>
       
       
      </div>
    </div>
  );

}

export default HeroSection;
