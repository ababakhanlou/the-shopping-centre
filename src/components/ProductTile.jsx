import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket as addToBasketAction } from "../actions/category";
import styled from "styled-components";

const StyledTile = styled.div`
  padding: 5px;
  height: 150px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  margin-bottom: 10px;
  margin-right: 5px;
  text-align: center;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

function ProductTile({ product }) {
  const dispatch = useDispatch();
  const addToBasket = (item, price) => {
    dispatch(addToBasketAction(item, price));
  };

  return (
    <StyledTile>
      <StyledUl>
        <li>{product.brand}</li>
        <li>{product.item}</li>
        <li>{product.model}</li>
        <li>{product.price}</li>
      </StyledUl>
      <button onClick={() => addToBasket(product.displayName, product.price)}>
        Add to Basket
      </button>
    </StyledTile>
  );
}

export default ProductTile;
