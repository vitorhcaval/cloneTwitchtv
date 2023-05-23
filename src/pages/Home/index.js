import React from 'react';

import Recommended from '../../components/Recommended';
import Slider from '../../components/Slider';
import Channels from '../../components/Channels';
import Categories from '../../components/Categories';
import ShowMore from '../../components/ShowMore';
import Directories from '../../components/Directories';


import { Container, Main } from './styles';
import Divisor from '../../components/Divisor';
import Footer from '../../components/Footer';

function Home() {
  return (
    <Container>
      <Recommended />
      <Main>
        <Slider />
        <Channels
        textLink="Canais ao vivo"
        text="que achamos que você vai gostar"
        />
        <ShowMore />
        <Categories
        titleLink="Categorias"
        titleText="que achamos que vai gostar"
        />
        <Divisor />
        <Directories />
        <Channels text="Em destaque" />
        <ShowMore />
        <Categories
        titleText="Jogos lançados recentemente"
        />
        <Divisor />
        <Channels
        textLink="Transmissões de jogos lançados recentemente"
        />
        <ShowMore />
        <Channels
        textLink="Streamers usando Guest Star"
        />
        <ShowMore />
        <Footer />
      </Main>
    </Container>
  );
}

export default Home;