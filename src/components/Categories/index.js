import React from 'react';

import ShowMore from '../ShowMore';
import CardCategories from '../CardCategories';

import justChatting from '../../assets/justChatting.jpg';
import fifa from '../../assets/fifa.jpg';
import valorant from '../../assets/valorant.jpg';
import sports from '../../assets/sports.jpg';
import fortnite from '../../assets/fortnite.jpg';
import grandTheftAuto from '../../assets/grandTheftAuto.jpg';
import specialEvents from '../../assets/specialEvents.jpg';
import minecraft from '../../assets/minecraft.jpg';
import hogwarts from '../../assets/hogwarts.jpg';

import { Container } from './styles';

function Categories(props) {
  return (
    <Container>
      <h2><a href="#">{props.titleLink}</a><span> {props.titleText}</span></h2>
      <div className='videos'>
        <CardCategories image={justChatting} />
        <CardCategories image={fifa} />
        <CardCategories image={valorant} />
        <CardCategories image={sports} />
        <CardCategories image={fortnite} />
        <CardCategories image={grandTheftAuto} />
        <CardCategories image={specialEvents} />
        <CardCategories image={minecraft} />
        <CardCategories image={hogwarts} />
      </div>
    </Container>
  );
}

export default Categories;