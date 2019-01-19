import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Circle from './Circle';
import { SB_GREY } from '../utils/constants/StyleConstants';

const Loading = (props) => {
  const Wrapper = styled.div`
    margin-left: 70px;
    margin-top: -5px;
    width: 25px;
    height: 25px;
    padding-top: 10px';
    position: relative;
  `;
  const color = SB_GREY;
  return (
    <Wrapper>
      <Circle />
      <Circle color={color} rotate={30} delay={-1.1} />
      <Circle color={color} rotate={60} delay={-1} />
      <Circle color={color} rotate={90} delay={-0.9} />
      <Circle color={color} rotate={120} delay={-0.8} />
      <Circle color={color} rotate={150} delay={-0.7} />
      <Circle color={color} rotate={180} delay={-0.6} />
      <Circle color={color} rotate={210} delay={-0.5} />
      <Circle color={color} rotate={240} delay={-0.4} />
      <Circle color={color} rotate={270} delay={-0.3} />
      <Circle color={color} rotate={300} delay={-0.2} />
      <Circle color={color} rotate={330} delay={-0.1} />
    </Wrapper>
  );
};

Loading.propTypes = {
  bSmall: PropTypes.bool,
  isTop: PropTypes.bool,
  isPage: PropTypes.bool,
};

export default Loading;
