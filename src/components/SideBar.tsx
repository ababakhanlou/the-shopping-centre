import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions/checkout";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { categories } from "../constants";

const StyledSideBar = styled.div`
  height: 800px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;
  padding-right: 10px;
`;

const StyledButton = styled.button`
  height: 70px;
  width: 180px;
  background-color: #691391;
  color: white;
  font-weight: 900;
  border: none;
  margin-bottom: 5px;
  border-radius: 10px;
`;

const StyledSearch = styled.form`
  padding-top: 15px;
  align-self: start;
`;

const StyledInput = styled.input`
  background-color: #691391;
  color: white;
  border-radius: 10px;
  font-weight: 900;
  border: none;
  padding: 10px;
  width: 150px;
`;

const StyledSubmit = styled.input`
  margin-top: 5px;
  background-color: #691391;
  color: white;
  margin-bottom: 5px;
  border-radius: 10px;
  font-weight: 900;
  border: none;
  padding: 9px;
`;

function SideBar() {
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!searchItem) changeLink(searchItem);
  };

  const dispatch = useDispatch();
  const chooseCategory = (payload: string) => {
    dispatch(setCategory(payload));
  };

  const history = useHistory();

  const changeLink = (page: string) => {
    chooseCategory(page);
    if (history.location.pathname === "/checkout") {
      history.push("/");
    }
  };

  return (
    <StyledSideBar>
      {Object.values(categories).map((category) => (
        <StyledButton key={category} onClick={() => changeLink(category)}>
          {category}
        </StyledButton>
      ))}

      <StyledSearch onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <StyledSubmit type="submit" value="Search" />
      </StyledSearch>
    </StyledSideBar>
  );
}

export default SideBar;
