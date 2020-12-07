import React, { useState } from "react";
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

const StyledSearch = styled.form`
  padding-top: 15px;
`;

function SideBar() {
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!!searchItem) changeLink(searchItem);
  };

  const dispatch = useDispatch();
  const chooseCategory = (payload) => {
    dispatch(setCategory(payload));
  };

  const history = useHistory();

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

      <StyledSearch onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <input type="submit" value="Search" />
      </StyledSearch>
    </StyledSideBar>
  );
}

export default SideBar;
