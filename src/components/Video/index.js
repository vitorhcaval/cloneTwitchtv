import React from 'react';

import { Container } from './styles';

export default function Video(thumb, profile, spectators, title, channel, content, tag) {
  return (
    <Container>
    <div className="video">
      <div className='thumb'>
        <p>AO VIVO</p>
        <img src={thumb} alt="" />
        <span>{spectators} mil espectadores</span>
      </div>
        <div className="thumbDescription">
          <div><img src={profile}/></div>
          <div className='infosThumb'>
            <p>{title}</p>
            <a href="#">{channel}</a>
            <a href="#"><span>{content}</span></a>
            <div className="tag">
              <a href="#">{tag}</a>
            </div>
          </div>
        </div>
    </div>
    </Container>
  );
}rfc