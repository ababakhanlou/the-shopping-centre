import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  padding-top: 70px;
  height: 700px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  margin-bottom: 10px;
  text-align: center;
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
