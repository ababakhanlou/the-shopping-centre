import React, { useEffect, useState } from "react";

import Basket from "./Basket";
import styled from "styled-components";

const StyledTopBar = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
`;

function TopBar() {
  return (
    <StyledTopBar>
      <h1>Shopping Centre!¡!</h1>
      <Basket />
    </StyledTopBar>
  );
}

export default TopBar;
