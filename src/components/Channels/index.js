import React from 'react';

import CardVideo from '../../components/CardVideo';

import { Container } from './styles';

function Channels(props) {
  return (
    <Container>
      <h2>
        <a href="#">
          {props.textLink}
        </a>
        <span> {props.text}</span>
      </h2>
      <div className='videos'>
        <CardVideo
          title="teste"
          author="PaulinhoLOKObr"
          activity="Grand Theft Auto V"
          tag={["Português", "teste"]}
        />
        <CardVideo
          title="PAULO VAI TIRAR CARTEIRA DE HELICÓPTERO DE NOVO? GTA RP +18"
          author="PaulinhoLOKObr"
          activity="Grand Theft Auto V"
          tag={["Português"]}
        />
        <CardVideo
          title="PAULO VAI TIRAR CARTEIRA DE HELICÓPTERO DE NOVO? GTA RP +18"
          author="PaulinhoLOKObr"
          activity="Grand Theft Auto V"
          tag={["Português", "teste"]}
        />
        <CardVideo
          title="PAULO VAI TIRAR CARTEIRA DE HELICÓPTERO DE NOVO? GTA RP +18"
          author="PaulinhoLOKObr"
          activity="Grand Theft Auto V"
          tag={["Português", "teste"]}
        />
        <CardVideo
          title="PAULO VAI TIRAR CARTEIRA DE HELICÓPTERO DE NOVO? GTA RP +18"
          author="PaulinhoLOKObr"
          activity="Grand Theft Auto V"
          tag={["Português", "teste"]}
        />
      </div>
    </Container>
  );
}

export default Channels;