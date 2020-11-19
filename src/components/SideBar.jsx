import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled.div`
  padding: 5px;
  height: 800px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: orange;
  margin-bottom: 10px;
  text-align: center;
`;

class SideBar extends React.Component {
  render() {
    return (
      <StyledSideBar>
        <button>page 1</button>
        <button>page 2</button>
        <button>page 3</button>
        <button>page 4</button>
        <button>page 5</button>
        <button>page 6</button>
      </StyledSideBar>
    );
  }
}

export default SideBar;
