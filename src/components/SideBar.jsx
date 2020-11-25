import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions/category";
import styled from "styled-components";

const StyledSideBar = styled.div`
  padding: 5px;
  height: 800px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  margin-bottom: 10px;
  text-align: center;
`;

const StyledButton = styled.button`
  height: 70px;
  width: 180px;
`;

function SideBar() {
  const dispatch = useDispatch();
  const chooseCategory = (payload) => {
    dispatch(setCategory(payload));
  };

  return (
    <StyledSideBar>
      <StyledButton onClick={() => chooseCategory("Home")}>Home</StyledButton>

      <StyledButton onClick={() => chooseCategory("PlayStation")}>
        PlayStation
      </StyledButton>

      <StyledButton onClick={() => chooseCategory("XBox")}>XBox</StyledButton>

      <StyledButton onClick={() => chooseCategory("Nintendo")}>
        Nintendo
      </StyledButton>
    </StyledSideBar>
  );
}

export default SideBar;
