import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 50px;
background-color: #18181b;
box-shadow: 0px 3px 5px #000;

.first {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon-tw{
  padding: 10px 5px 5px 10px;
  svg{
    font-size: 28px;
    color: #a970ff;
  }
}
.procurar{
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 12px;
  p{
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
    :hover{
      color: #bf94ff;
    }  
  }
}

.more{
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
  padding: 0px 10px; 
  button{
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    :hover{
      background-color: #363639;
      border-radius: 0.4rem;
    }
  }
  svg{
    font-size: 24px;
    color: #fff;
  }
}


.second{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  button{
    margin: 0px 0px 0px 1px;
    width: 34px;
    height: 36px;
    background-color: #2a2a2d;
    border: none;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    cursor: pointer;
    :disabled{
      cursor: not-allowed;
    }
    :hover{
      background-color: #363639;
    }
    svg{
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
  }
}
.search input{
  appearance: none;
  width: 355px;
  height: 36px;
  padding: 5px 10px;
  border: 2px solid hsla(0,0%,100%,0);
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  background-color: #3d3d40;
  color: #efeff1;
  font-size: 14px;
  font-weight: 700;
  transition: border 100ms ease-in;
  :hover{
    transition: border 100ms ease-in;
    border: 2px solid hsla(0,0%,100%,.16);
  }
  :focus{
    background-color: #000000;
    transition: border 100ms ease-in;
    border: 2px solid #a970ff;
    outline: none;
  }
  ::placeholder{
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    color: #c5c5c6;
  }
}

.third{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  svg{
    color: #ffffff;
  }
}
.prime{
  display: flex;
  align-items: center;
  height: 50px;
  padding: 5px;
  button{
    position: relative;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    :hover{
      background-color: #363639;
      border-radius: 0.4rem;
    }
    p{
      right: -8px;
      top: -5px;
      width: 30px;
      height: 20px;
      border: 2px solid #18181b;
      position: absolute;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      background-color: red;
      border-radius: 50px;
    }
    svg{
      font-size: 24px;
    }
  }
}
.entrar{
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 0px 0px 5px;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 30px;
    background-color: #2a2a2d;
    border-radius: 5px;
    padding: 0px 10px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    :hover{
      background-color: #363639;
      border-radius: 5px;
    }
  }
}
.cadastrar{
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 0px 0px 10px;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    height: 30px;
    background-color: #9147ff;
    border-radius: 5px;
    padding: 0px 10px;
    border: none;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    :hover{
      background-color: #772ce8;
      border-radius: 5px;
    }
  }
}
.login{
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 0px 0px 5px;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 0.4rem;
    border: none;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    :hover{
      background-color: #363639;
      border-radius: 0.4rem;
    }
    svg{
      font-size: 22px;
    }
  }
}
`;
