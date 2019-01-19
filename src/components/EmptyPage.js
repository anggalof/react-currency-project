import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H3 from './H3';
import ContentWrapper from './ContentWrapper';

function EmptyPage(props) {
  const Wrapper = styled.div`
    margin: 10px auto;
    max-width: 1080px;
  `;

  const CenteredH3 = styled(H3)`
    text-align: center;
  `;

  return (
    <Wrapper>
      <ContentWrapper>
        <CenteredH3>
          {props.message || 'DATA TIDAK TERSEDIA'}
        </CenteredH3>
      </ContentWrapper>
    </Wrapper>
  );
}

EmptyPage.propTypes = {
  message: PropTypes.string,
};

export default EmptyPage;
