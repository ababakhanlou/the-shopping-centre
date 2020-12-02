import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToBasket as addToBasketAction,
  removeFromBasket as removeFromBasketAction,
  deductFromBasket as deductFromBasketAction,
} from "../actions/category";
import styled from "styled-components";

const StyledCheckout = styled.div`
  padding-left: 10px;
`;

const StyledItem = styled.div``;

function Checkout() {
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();
  const addToBasket = (item, price) => {
    dispatch(addToBasketAction(item, price));
  };
  const removeFromBasket = (item) => {
    dispatch(removeFromBasketAction(item));
  };
  const deductFromBasket = (item) => {
    dispatch(deductFromBasketAction(item));
  };

  let totalPrice = 0;
  basket.forEach((item) => {
    totalPrice = totalPrice + item.price * item.qty;
  });

  return (
    <StyledCheckout>
      <h2>Welcome to the Checkout</h2>
      <h3>Please review your shit</h3>
      <h3>Total Price £{totalPrice}</h3>

      {basket.map((item, index) => (
        <StyledItem key={index}>
          <p>
            {item.item} : £{item.price} <br />
            SubTotal: £{item.price * item.qty}
            <br />
            <button onClick={() => deductFromBasket(item.item)}>-</button> [
            {item.qty}]
            <button onClick={() => addToBasket(item.item, item.price)}>
              +
            </button>
            <br />
            <button onClick={() => removeFromBasket(item.item)}>
              Remove From Basket
            </button>
          </p>
        </StyledItem>
      ))}
    </StyledCheckout>
  );
}

export default Checkout;
