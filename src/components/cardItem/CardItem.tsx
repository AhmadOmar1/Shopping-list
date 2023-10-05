import * as React from 'react';
import './CardItem.css'


export default function CardItem() {
  return (
    <div className='card'>
      <div className='image-section'> </div>
      <div className='content'>
        <h2>Item name</h2>
        <h3>Desc</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, magnam?</p>
      </div>
    </div>
  );
}


