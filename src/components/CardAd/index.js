import React from 'react';

import { Container } from './styles';

import iconCard from '../../assets/iconCard.png'

function CardAd() {
  return (
    <Container>
      <div className="card">
        <div className='cardContent'>
        <img src={iconCard} />
        <h2>Participe da comunidade Twitch!</h2>
        <p>Descubra as melhores transmissões ao vivo em qualquer lugar.</p>
        </div>
        <button>Cadastrar-se</button>
      </div>
    </Container>
  );
}

export default CardAd;