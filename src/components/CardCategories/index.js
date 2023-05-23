import React from 'react';

import { Container } from './styles';

function CardCategories(props) {
  return (
    <Container>
      <div className="clip-top"></div>
      <div className="clip-bottom"></div>
      <img src={props.image} alt="" />
    </Container>
  );
}

export default CardCategories;