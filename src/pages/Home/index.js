import React from 'react';

import Recommended from '../Recommended';
import Channels from '../../components/Channels';
import Categories from '../../components/Categories';
import ShowMore from '../../components/ShowMore';
import Directories from '../../components/Directories';


import videoThumb from '../../assets/videoThumb01.jpg'
import profile from '../../assets/70x70.png'
import { MdOutlineKeyboardArrowLeft as MdLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight as MdRight } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { TbSettings } from 'react-icons/tb';
import { MdVolumeDown } from 'react-icons/md';
import { RiFullscreenFill } from 'react-icons/ri';


import { Container, Main, Slider } from './styles';
import Divisor from '../../components/Divisor';
import Footer from '../../components/Footer';

function Home() {
  return (
    <Container>
      <Recommended />
      <Main>
        <Slider>
          <div className='box'>
          <button>
            <MdLeft />
          </button>
          <div className="featured">
            <div className='video'>
              <div>
                <p>AO VIVO</p>
                <img src={videoThumb} alt="thumbnaill of stream" />
              </div>
              <div className="navigation">
                <div className='contentNavigationVideo'>
                  <div>
                    <button>
                      <BsFillPlayFill />
                    </button>
                    <button>
                      <MdVolumeDown />
                    </button>
                  </div>
                  <div>
                    <button>
                      <TbSettings />
                    </button>
                    <button>
                      <RiFullscreenFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="videoInformation">
              <div className="profileVideoInformation">
                <img src={profile} alt="profile" />
                <div>
                  <p>
                    Baiano
                  </p>
                  <a href='example'>
                    League of Legends
                  </a>
                  <p>
                    12,8 mil espectadores
                  </p>
                </div>
              </div>
              <div className="tags">
                <div className='tag'>
                  <a href='example'>
                    <span>
                      LCS
                    </span>
                  </a>
                </div>
                <div className="tag">
                  <a href='example'>
                    <span>
                      Português
                    </span>
                  </a>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum, dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <button>
            <MdRight />
          </button>
        </div>
        </Slider>
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