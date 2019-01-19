import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  margin-bottom: 24px;
  padding-left: 8px;
  font-weight: 400;
  font-size: 16px;
`;

function H3(props) {
  return <Text {...props} />;
}

export default H3;
