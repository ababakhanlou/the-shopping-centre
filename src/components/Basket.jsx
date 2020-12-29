import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getBasketItemCount } from "../selector/checkout";

const StyledBasket = styled.div``;

const StyledBasketCount = styled.i`
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const StyledLink = styled(Link)`
  :visited {
    color: inherit;
  }
  text-decoration: none;
`;

function Basket() {
  const basketCount = useSelector(getBasketItemCount);

  return (
    <StyledLink to="/checkout">
      <StyledBasket>
        <i className="fas fa-shopping-cart fa-2x"></i>
        <StyledBasketCount>{basketCount}</StyledBasketCount>
      </StyledBasket>
    </StyledLink>
  );
}

export default Basket;
