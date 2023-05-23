import React from 'react';

import { Container } from './styles';

import videoThumb from '../../assets/videoThumb01.jpg'
import profile from '../../assets/70x70.png'

import { MdOutlineKeyboardArrowLeft as MdLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight as MdRight } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { TbSettings } from 'react-icons/tb';
import { MdVolumeDown } from 'react-icons/md';
import { RiFullscreenFill } from 'react-icons/ri';

function Slider() {
  return (
    <Container>
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
                <a href="#">
                  League of Legends
                </a>
                <p>
                  12,8 mil espectadores
                </p>
              </div>
            </div>
            <div className="tags">
              <div className='tag'>
                <a href="#">
                  <span>
                    LCS
                  </span>
                </a>
              </div>
              <div className="tag">
                <a href="#">
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
    </Container>
  );
}

export default Slider;