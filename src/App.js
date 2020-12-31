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
import { categories } from "./constants";

const StyledApp = styled.div`
  background-color: #5a025a;
`;

const StyledMainBody = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 3px;
  height: fit-content;
`;

function App() {
  const baseCategories = Object.values(categories);
  const category = useSelector((state) => state.selectedCategory);

  const [filteredStock, setFilteredStock] = useState([]);
  useEffect(() => {
    if (baseCategories.includes(category)) {
      setFilteredStock(getItemByBrand(category));
    } else {
      setFilteredStock(getItemBySearch(category));
    }
  }, [category, baseCategories]);

  return (
    <Router>
      <StyledApp>
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
      </StyledApp>
    </Router>
  );
}

export default App;
