import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Box = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  margin-top: 8px;
  color: #8c8c8e;
`;

const Estimated = styled.div`
  padding-left: 21px;
  margin-right: 44px;
  display: flex;
`

const Actual = styled.div`
  display: flex;
`

const Text = styled.div`
  margin-bottom: 0px;
  font-weight: 400;
`

const CircleContainer = styled.svg`
  margin-right: 12px;
  overflow: visible;
  color: #21ce99;
`
const Circle = styled.circle`
  fill: #21ce99;
`

const Header = styled.div`
  font-weight: 500;
`


const Legend = () => {
  return(
    <Box>
      <Estimated>
        <CircleContainer width="28" height="28">
          <g transform="translate(14,20)">
            <Circle r="7" opacity="0.2" />
          </g>
        </CircleContainer>
        <Text>
          <Header>
            Estimated
          </Header>
          <div>—</div>
        </Text>
      </Estimated>
      <Actual>
        <CircleContainer width="28" height="28">
          <g transform="translate(14,20)">
            <Circle r="7" />
          </g>
        </CircleContainer>
        <Text>
          <Header>
            Actual
          </Header>
          <div>Expected Jan 30, Pre-Market</div>
        </Text>
      </Actual>
    </Box>
  )
}


export default Legend;
