import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import { Button } from '../Button';

function SignUp() {
  return(
    <div className='hero-container'>
    <h1>Welcome to the Patient Portal</h1>
    <p>What are you waiting for?</p>
    <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Log In
      </Button>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Sign Up
      </Button>
    </div>
  </div>
  )

}

export default SignUp;
