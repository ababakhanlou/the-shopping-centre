import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import WelcomeTile from "./components/WelcomeTile";
import inventory from "./services/inventory";
import ProductTile from "./components/ProductTile";

const StyledMainBody = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  order: 5;
  margin-bottom: 10px;
  margin-left: 3px;
`;

function App() {
  const category = useSelector((state) => state.selectedCategory);

  const [filteredStock, setFilteredStock] = useState([]);
  useEffect(() => {
    setFilteredStock(inventory(category));
  }, [category]);

  return (
    <div>
      <TopBar />
      <StyledMainBody>
        <SideBar />

        {!filteredStock.length ? (
          <WelcomeTile />
        ) : (
          <StyledItems>
            {filteredStock.map((item, index) => (
              <ProductTile product={item} key={index} />
            ))}
          </StyledItems>
        )}
      </StyledMainBody>
    </div>
  );
}

export default App;
