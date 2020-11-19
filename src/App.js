import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

const StyledMainBody = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

function App() {
  return (
    <Router>
      <div>
        <div>
          <TopBar />
        </div>
        <StyledMainBody>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <div className="App">
                <p>hello page</p>
              </div>
            </Route>
            <Route path="/page1">
              <div className="App">
                <p>page1</p>
              </div>
            </Route>
            <Route path="/page2">
              <div className="App">
                <p>page2</p>
              </div>
            </Route>
          </Switch>
        </StyledMainBody>
      </div>
    </Router>
  );
}

export default App;
