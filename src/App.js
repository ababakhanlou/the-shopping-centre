import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import WelcomeTile from "./components/WelcomeTile";
import { getItemByBrand, getItemBySearch } from "./services/inventory";
import ProductTile from "./components/ProductTile";
import Checkout from "./components/Checkout";

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
  const baseCategories = ["Home", "XBox", "PlayStation", "Nintendo"];
  const category = useSelector((state) => state.selectedCategory);

  const [filteredStock, setFilteredStock] = useState([]);
  useEffect(() => {
    if (baseCategories.includes(category)) {
      setFilteredStock(getItemByBrand(category));
    } else {
      setFilteredStock(getItemBySearch(category));
    }
  }, [category]);

  return (
    <Router>
      <div>
        <TopBar />
        <StyledMainBody>
          <SideBar />
          <Switch>
            <Route exact path="/">
              {!filteredStock.length ? (
                <WelcomeTile />
              ) : (
                <StyledItems>
                  {filteredStock.map((item, index) => (
                    <ProductTile product={item} key={index} />
                  ))}
                </StyledItems>
              )}
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </StyledMainBody>
      </div>
    </Router>
  );
}

export default App;
