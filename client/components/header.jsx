import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.div`
  color: ${props => {
    const d = new Date();
    const totalMinutes = (d.getHours() * 60) + d.getMinutes();
    let background = '';
    if (totalMinutes < 360 || totalMinutes >= 900) {
      return '#fff;'
    } else {
      return 'rgb(23, 23, 24);'
    }
    }
  };
  width: 676px;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  border-bottom: 1px solid ${props => {
    const d = new Date();
    const totalMinutes = (d.getHours() * 60) + d.getMinutes();
    let background = '';
    if (totalMinutes < 360 || totalMinutes >= 900) {
      return '#0e0d0d;'
    } else {
      return 'rgba(237, 237, 237, 0.5);'
    }
  }}
  padding-bottom: 16px;
  margin-bottom: 24px;
`;


const Header = () => {
  return(
    <Title>Earnings</Title>
  )
}


export default Header;
