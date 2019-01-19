import React, { Component } from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: block;
`;
const Copy = styled.div`
  padding: 10px 0;
  color: #a7a9ac;
  @media only screen and (min-width: 768px) {
    padding: 10px 0 10px;
  }
`;
const ImageWrapper = styled.p`
  margin-bottom: 0;
  position: relative;
  text-align: center;
  @media only screen and (min-width: 768px) {
    line-height: 26px;
  }
`;
const CopyRight = styled.span`
  font-size: 11px;
  font-weight: 600;
  font-style: italic;
`;

class Footer extends Component {
  render() {
    let dateRight = new Date();
    dateRight = dateRight.getFullYear();
    return (
      <FooterWrapper>
        <Copy>
          <div className="container-fluid">
            <ImageWrapper>
              <CopyRight>&copy; {dateRight} All Right Reserved.</CopyRight>
            </ImageWrapper>
          </div>
        </Copy>
      </FooterWrapper>
    )
  }
}

export default Footer;
