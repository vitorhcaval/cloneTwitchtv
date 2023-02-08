import React from 'react';

import Recommended from '../../components/Recommended';

import thumb from '../../assets/thumb.jpg';
import { Container } from './styles';
import { MdOutlineKeyboardArrowLeft as MdLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight as MdRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown as MdDown } from 'react-icons/md';

function Home() {
  return (
    <Container>
      <Recommended />
      <div>
        <div className='slider'>
          <div className='box'>
            <button><MdLeft /></button>
              <div className="featured"></div>
              <div className="featured-1"></div>
              <div className="featured-2"></div>
              <div className="featured-3"></div>
              <div className="featured-4"></div>
            <button><MdRight /></button>
          </div>
        </div>
        <div className='content'>
          <h2><a href="#">Canais ao vivo</a><span> que achamos que você vai gostar</span></h2>
          <div className='videos'>
          <div className='thumb'><img src={thumb} alt="" /></div>
          <div className='thumb'><img src={thumb} alt="" /></div>
          <div className='thumb'><img src={thumb} alt="" /></div>
          <div className='thumb'><img src={thumb} alt="" /></div>
          <div className='thumb'><img src={thumb} alt="" /></div>
          </div>
          <div className='showMore'>
            <div className='line'></div>
            <button><p>Mostrar mais</p><MdDown /></button>
            <div className='line'></div>
          </div>
        </div>
      </div>

    </Container>
  );
}

export default Home;