import React from 'react';
import thumb1 from '../../assets/thumb1.jpg';
import profile from '../../assets/70x70.png'
import { Video, Thumb, VideoDescription, Infos, Tag } from './styles';

function CardVideo(props) {
  let tags = [props.tag];
  const tagList = tags.map((tag, index) => {
    <a key={index}>
      <span>{tag}</span>
    </a>
});

  return (
    <Video>
      <Thumb>
        <div className="clip-top"></div>
        <div className="clip-bottom"></div>
        <p>AO VIVO</p>
        <img src={thumb1}/>
        <span>11,4 mil espectadores</span>
      </Thumb>
      <VideoDescription>
        <div><img src={profile}/></div>
        <Infos>
          <p>{props.title}</p>
          <a>{props.author}</a>
          <a><span>{props.activity}</span></a>
          <Tag>
            {tagList}
          </Tag>
        </Infos>
      </VideoDescription>
    </Video>
  );
}

export default CardVideo;