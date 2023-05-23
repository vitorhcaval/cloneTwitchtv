import React from 'react';

import { Container } from './styles';

function CardDirectories(props) {
  return (
    <Container>
      <h1>{props.title}</h1>
      <img src={props.image}/>
    </Container>
  );
}

export default CardDirectories;