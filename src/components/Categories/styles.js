import styled from 'styled-components';

export const Container = styled.div`
  h2{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    padding: 0px 30px;
    color: #fff;
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
    margin: 0px 30px;
  }
`;
