import styled from 'styled-components';

export const Container = styled.div`
width: 162px;
height: 216px;
margin: 0px 5px;  
background-color: #f8f700;
cursor: pointer;
position: relative;
img{
  width: 162px;
  height: 216px;
  transition: all 100ms ease-in;
  :hover{
    transition: all 100ms ease-in;
    transition-delay: 75ms;
    translate: 6px -6px;
  }
}
.clip-top{
  z-index: 0;
  position: absolute;
  top: -6px;
  left: -6px;
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
  bottom: 0px;
  right: 0px;
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
`;
