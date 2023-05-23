import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0 2rem;

button{
width: 147px;
height: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
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
  font-size: 14px;
  font-weight: 500;
  color: #bf94ff;
}
svg{
  font-size: 24px;
  color: #bf94ff;
}
}
`;
