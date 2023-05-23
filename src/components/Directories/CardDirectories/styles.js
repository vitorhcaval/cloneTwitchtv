import styled from 'styled-components';

export const Container = styled.button`
height: 45px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border: none;
border-radius: 5px;
padding: 0px 15px;
background-color: #772ce8;
cursor: pointer;
:hover{
  background-color: #8947eb;
}

h1{
  font-size: 25px;
  font-weight: 600;
  color: #fff;
}
`;
