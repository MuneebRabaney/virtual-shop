import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 650px;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px 20px 70px 20px;
  position: relative;
  background: #ccc;
  text-align: center;
  @media only screen and (max-width: 700px) {
    width: 80%;
    min-height: 450px;
  }
`;

function Main({ children }) {
  return <Container>{children}</Container>;
}

export default Main;
