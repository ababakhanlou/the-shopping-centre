import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToBasket as addToBasketAction,
  removeFromBasket as removeFromBasketAction,
  deductFromBasket as deductFromBasketAction,
} from "../actions/checkout";
import { getBasketTotal } from "../selector/checkout";
import styled from "styled-components";

const StyledCheckout = styled.div`
  padding-left: 10px;
  color: white;
`;

const StyledItem = styled.div`
  color: white;
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledActions = styled.div`
  color: white;
  padding-top: 5px;
  align-self: center;
  button {
    border-radius: 10px;
    background-color: #691391;
    color: white;
    height: 30px;
    width: 30px;
    font-weight: 900;
    margin: 5px;
  }
`;

const StyledRemove = styled.button`
  background-color: #691391;
  color: white;
  width: 100%;
  font-weight: 900;
  border: none;
  margin-top: 2px;
  border-radius: 10px;
  padding: 5px;
`;

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

  const totalPrice = useSelector(getBasketTotal);

  return (
    <StyledCheckout>
      <h2>Welcome to the checkout</h2>
      <h3>Please review your basket</h3>
      <h3>Total Price £{totalPrice}</h3>

      {basket.map((item, index) => (
        <StyledItem key={index}>
          <div>
            {item.item} : £{item.price}
          </div>
          <div> SubTotal: £{item.price * item.qty}</div>

          <StyledActions>
            <button onClick={() => deductFromBasket(item.item)}>-</button>
            Qty: {item.qty}
            <button onClick={() => addToBasket(item.item, item.price)}>
              +
            </button>
          </StyledActions>

          <StyledRemove onClick={() => removeFromBasket(item.item)}>
            Remove From Basket
          </StyledRemove>
        </StyledItem>
      ))}
    </StyledCheckout>
  );
}

export default Checkout;
