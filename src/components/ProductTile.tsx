import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket as addToBasketAction } from "../actions/checkout";
import styled from "styled-components";

const StyledTile = styled.div`
  padding: 5px;
  height: 150px;
  width: 180px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #691391;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 5px;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: #5a025a;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 10px;
  padding: 12px;
  margin-top: 15px;
`;

interface ProductProps {
  displayName: string;
  price: number;
}

interface Props {
  product: ProductProps;
}

function ProductTile({ product }: Props) {
  const dispatch = useDispatch();
  const addToBasket = (item: string, price: number) => {
    dispatch(addToBasketAction(item, price));
  };

  return (
    <StyledTile>
      <div>{product.displayName}</div>
      <div>£{product.price}</div>
      <StyledButton
        onClick={() => addToBasket(product.displayName, product.price)}
      >
        Add to Basket
      </StyledButton>
    </StyledTile>
  );
}

export default ProductTile;
