import styled from 'styled-components';

export const Slider = styled.div`
width: 100%;
height: 350px;
display: flex;
align-items: center;
justify-content: center;

  .box{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  button{
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: transparent;
    :hover{
      transition: background-color 100ms ease-in;
      background-color: #363639;
    }
  }
  svg{
    font-size: 32px;
    color: #fff;
  }
}
  .featured{
  width: 750px;
  height: 300px;
  display: flex;
  position: relative;
  background-color: #fff;

  .video{
    width: 530px;
    height: 300px;
    p{
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
    img{
      width: 530px;
      height: 300px;
    }
  }
  .navigation{
    width: 530px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.35) 60%, transparent);
    .contentNavigationVideo{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0px 10px;
      div{
        display: flex;
        flex-direction: row;
        padding: 5px;
      }
    }
    button{
      margin: 0px 5px;
      svg{
        font-size: 24px;
      }
      :hover{
        background-color: #ffffff21;
      }
    }
  }
}

.videoInformation{
  width: 220px;
  height: 300px;
  background-color: #181818;
  padding: 10px;
}

.profileVideoInformation{
  display: flex;
  img{
    width: 50px;
    border-radius: 50px;
  }
  p, a{
    margin-left: 8px;
    font-size: 13px;
    color: #bf94ff;
    text-decoration: none;
  }
  p{
    font-weight: 700;
    :last-child{
      color: #fff;
      font-weight: 400;
    }
  }
}
.tags{
  display: flex;
  margin: 8px 0px;
  .tag{    
    padding: 5px;
  }
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
    span{
      font-size: 12px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
.description{
  p{
    font-size: 14px;
    color: #fff;
  }

}
`;

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: 240px 1fr;
background-color: #0e0e10;

`;

export const Main = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 3rem;
background-color: #0e0e10;
`;
