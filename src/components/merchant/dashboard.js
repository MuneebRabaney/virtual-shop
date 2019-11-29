import React, { Component } from 'react';
import styled from 'styled-components';

const LeftSide = styled.div`
  width: 40%;
  background: lightblue;
`;

const RightSide = styled.div`
  width: 60%;
  background: orange;
`;

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <LeftSide>left column</LeftSide>
        <RightSide>right column</RightSide>
      </div>
    );
  }
}

export default Dashboard;
