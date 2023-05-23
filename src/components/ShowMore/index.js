import React from 'react';

import { Container } from './styles';
import Divisor from '../Divisor';
import { MdOutlineKeyboardArrowDown as MdDown } from 'react-icons/md';

function ShowMore() {
  return (
    <Container>
      <Divisor width="50%" />
      <button><p>Mostrar mais</p><MdDown /></button>
      <Divisor width="50%" />
    </Container>
  );
}

export default ShowMore;