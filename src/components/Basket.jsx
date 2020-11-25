import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledBasket = styled.div``;

const StyledBasketCount = styled.i`
  font-weight: bold;
  font-size: 20px;
  color: red;
`;

function Basket() {
  const basketStore = useSelector((state) => state.basket);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    setBasket(basketStore);
  }, [basketStore]);

  return (
    <StyledBasket>
      <i className="fas fa-shopping-cart fa-2x"></i>
      {basket.length > 0 && (
        <StyledBasketCount>{basket.length} </StyledBasketCount>
      )}
    </StyledBasket>
  );
}

export default Basket;
