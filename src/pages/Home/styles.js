import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 240px 1fr;
grid-template-rows: 1fr;

background-color: #0e0e10;
.slider{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
}
.box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1182px;
  height: 300px;
  button{
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
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
  background-color: #fff;
  width: 750px;
  height: 300px;
}
.content{
  margin: 0rem 3rem 0rem 3rem;
  h2{
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 10px;
  }
  a{
    color: #bf94ff;
    text-decoration: none;
    :hover{
      color: #a970ff;
      text-decoration: underline;
    }
  }
  .videos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .thumb{
    background-color: #a970ff;
    width: 300px;
    height: 169px;
    margin: 5px;
    img{
      width: 300px;
      transition: all 100ms ease-in;
      :hover{
        transition: all 100ms ease-in;
        box-shadow: -6px 6px #50eec9;
      }
    }
  }
  .line{
    flex-grow: 1;
    height: 1px;
    margin: 0px 10px;
    background-color: rgba(255, 255, 255, 0.2);
  }
}
button{
  width: 147px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  :hover{
    background-color: #2d2d2f;
    p, svg{
      color: #fff;
    }
  }
  p{
    color: #bf94ff;
    font-size: 14px;
    font-weight: 500;
  }
  svg{
    color: #bf94ff;
    font-size: 24px;
  }
  }
  .showMore{
    margin: 2rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

`;
