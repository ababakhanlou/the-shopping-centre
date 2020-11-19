import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTopBar = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
`;

class TopBar extends React.Component {
  render() {
    return (
      <StyledTopBar>
        <h1>Shopping Centre!¡!</h1>
      </StyledTopBar>
    );
  }
}

export default TopBar;
