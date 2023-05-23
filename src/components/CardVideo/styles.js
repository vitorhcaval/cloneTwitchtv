import styled from 'styled-components';

export const Video = styled.div`
width: 300px;
padding: 0px 30px;  
display: flex;
flex-direction: column;
margin: 10px;
position: relative;

`;

export const Thumb = styled.div`
z-index: 1;
width: 300px;
height: 169px;
margin: 5px;
background-color: #f8f700;
cursor: pointer;
.clip-top{
  z-index: 0;
  position: absolute;
  top: -1px;
  left: 29px;
  width: 6px;
  height: 12px;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
  border-right: 0.4rem solid #f8f700;
  transform-origin: left center;
  transition-delay: 75ms;
  transform: translateX(0.4rem) scale(0);
}
.clip-bottom{
  z-index: 0;
  position: absolute;
  bottom: 67px;
  right: -35px;
  width: 12px;
  height: 6px;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-top: 0.4rem solid #f8f700;
  transform-origin: center bottom;
  transition-delay: 75ms;
  transform: translateX(0.4rem) scale(0);
}
:hover{
  .clip-top{
    transition-delay: 200ms;
    transform: translateX(0.4rem) scale(1);
  }
  .clip-bottom{
    transition-delay: 200ms;
    transform: translateX(0.4rem) scale(1);
  }
}
img{
  width: 300px;
  transition: all 100ms ease-in;
}
:hover{
  img{
    transition: all 100ms ease-in;
    transition-delay: 75ms;
    translate: 6px -6px;
  }
}
p:nth-child(3){
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 10px 0px 0px 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  background-color: #eb0400;
  color: #fff;
  z-index: 10;
}
span{
  width: 80%;
  position: relative;
  bottom: 35px;
  margin: 10px;
  font-size: 13px;
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
  padding: 2px 5px;
}
`;

export const VideoDescription = styled.div`
width: 300px;
display: flex;
gap: 10px;

img{
  width: 40px;
  border-radius: 50px;
}
`;

export const Infos = styled.div`
width: 300px;
gap: 5px;
display: flex;
flex-direction: column;
width: 100%;
min-width: 0px;

p{
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
}

a{
  font-size: 12px;
  font-weight: 400;
  color: #adadb8;
  text-decoration: none;
  a span{
    background-color: transparent;
    :hover{
      text-decoration: none;
      color: #a970ff;
    }
  }
}
`;

export const Tag = styled.div`
gap: 5px;
display: flex;
a{ 
  width: fit-content;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  border-radius: 25px;
  background-color: #2d2d2f;
  text-decoration: none;
  font-weight: 700;
  span{
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
  }
}
`;
