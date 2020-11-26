import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledCheckout = styled.div``;

const StyledItem = styled.div``;

function Checkout() {
  const basket = useSelector((state) => state.basket);
  console.log(basket);

  return (
    <StyledCheckout>
      <h2>Welcome to the Checkout</h2>
      <h3>Please review your shit</h3>

      {basket.map((item, index) => (
        <StyledItem key={index}>
          <p>
            {item.item} : {item.price}
          </p>
          <button>-</button>
          []
          <button>+</button>: SubTotal:
        </StyledItem>
      ))}
    </StyledCheckout>
  );
}

export default Checkout;
