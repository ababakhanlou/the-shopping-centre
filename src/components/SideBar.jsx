import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions/category";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

  let history = useHistory();

  const changeLink = (page) => {
    chooseCategory(page);
    if (history.location.pathname === "/checkout") {
      history.push("/");
    }
  };

  return (
    <StyledSideBar>
      <StyledButton onClick={() => changeLink("Home")}>Home</StyledButton>

      <StyledButton onClick={() => changeLink("PlayStation")}>
        PlayStation
      </StyledButton>

      <StyledButton onClick={() => changeLink("XBox")}>XBox</StyledButton>

      <StyledButton onClick={() => changeLink("Nintendo")}>
        Nintendo
      </StyledButton>
    </StyledSideBar>
  );
}

export default SideBar;
