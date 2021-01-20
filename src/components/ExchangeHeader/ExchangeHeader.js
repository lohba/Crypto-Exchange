import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;
const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 36px;
    color: white;
`;
const H1 = styled.h1 `
    font-size: 3rem;
    line-height: 8rem;
    fold-weigt: bold;
    min-width: 300px;
    margin-left: 60px;
`;

export default class HeaderExchange extends Component {
    render() {
        return (
            <Header>
            {/* <Img src={logo} alt="React logo" /> */}
              <H1 className="App-title">
                Coin Exchange
              </H1>
            </Header>
        )
    }
}
