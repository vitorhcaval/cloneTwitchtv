import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow-y: auto;
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1f1f23;
  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    p{
      font-size: 13px;
      font-weight: 600;
      color: #fff;
    }
    button{
      background-color: transparent;
      border: none;
      svg{
        color: #ffff;
        font-size: 22px;
        transform: rotate(-180deg);
      }
    }
  }
  .canais{
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .perfil{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    padding: 3px 10px;
    cursor: pointer;
    :hover{
      background-color: #26262c;
    }
  }
  .foto{
    padding: 5px;
    img{
      width: 30px;
      border-radius: 50px;
    }
  }
  .infos{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
      p{
        font-size: 13px;
        font-weight: 700;
        color: #fff;
      }
      span{
        font-size: 13px;
        font-weight: 500;
        color: #adadb8;
      }
    }
  .name{
    display: flex;
    flex-direction: column;
  }
  .spectators{
    display: flex;
    flex-direction: row;
    align-items: center;
    div{
      padding: 0px 5px 0px 0px;
    }
  }
  .online{
      width: 8px;
      height: 8px;
      border-radius: 50px;
      background-color: red;
    }
`;
