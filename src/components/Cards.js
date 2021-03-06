import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>      
      <h1>Patient Management System</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>            
            <CardItem            
              src='/images/img-4.jpg'
              text='Get the details of a patient'
              label='Medical'
              path='/services'
            />
             <CardItem            
              src='/images/img-4.jpg'
              text='Get the details of a patient'
              label='Patient Details'
              path='/login'
            />
            </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
