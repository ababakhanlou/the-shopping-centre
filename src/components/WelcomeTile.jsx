import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  padding-top: 20px;
  margin-left: 50px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  width: 100%;
`;

function WelcomeTile() {
  return (
    <StyledTile>
      <h2>The Shopping Centre</h2>
      <p>The home of the game console</p>
    </StyledTile>
  );
}

export default WelcomeTile;
