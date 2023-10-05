import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardItem from '../components/cardItem/CardItem';
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='home-page'>
      <div className='items-container'>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

    </div>
  );
}