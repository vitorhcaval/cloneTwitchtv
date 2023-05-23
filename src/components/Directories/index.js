import React from 'react';

import CardDirectories from './CardDirectories';
import { Container } from './styles';

function Directories(props) {
  return (
    <Container>
      <CardDirectories
      title="Jogos"
      image="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
      />
      <CardDirectories
      title="Vida Real"
      image="https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg"
      />
      <CardDirectories
      title="Música"
      image="https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg"
      />
      <CardDirectories
      title="Esports"
      image="https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg"
      />
      <CardDirectories
      title="Creative"
      image="https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg"
      />
    </Container>
  );
}

export default Directories;