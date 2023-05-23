import styled from 'styled-components';

export const Container = styled.div`
  .card{
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #5c16c5;
  z-index: 999;
  padding: 25px;
  .cardContent{
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
      height: 40px;
      margin-right: 15px;
    }
    h2{
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      margin-right: 15px;
    }
    p{
      color: #ffffff;
      font-size: 18px;
    }
  }
  button{
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 13px;
    font-weight: 500;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    :hover{
      background-color: #efe8f9;
    }
  }
}
`;
