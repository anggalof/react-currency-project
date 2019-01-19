import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SB_PURPLE, SB_WHITE, SB_DARK_PURPLE } from '../../utils/constants/StyleConstants';
import logo from '../../public/logo.svg';

const AppIn = styled.div`
  text-align: center;
  padding: 10px;
  background-color: ${SB_PURPLE};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${SB_DARK_PURPLE};
  }
`;
const LinkToForeign = styled(Link)`
  color: ${SB_WHITE};
  width: 50%;
  &:hover {
    text-decoration: none;
    color: ${SB_WHITE};
  }
`;
class HomePage extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Foreign Currency Applications
        </p>
        <LinkToForeign to='/foreign-currency'>
          <AppIn>
            <div className='glyphicon glyphicon-pencil' /> Click Here
          </AppIn>
        </LinkToForeign>
      </header>
    );
  }
}

export default HomePage;
