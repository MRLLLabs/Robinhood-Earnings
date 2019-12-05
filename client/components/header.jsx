import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  border-bottom: 1px solid #0e0d0d;
  padding-bottom: 16px;
  margin-bottom: 24px;
`;


const Header = () => {
  return(
    <Title>Earnings</Title>
  )
}


export default Header;
