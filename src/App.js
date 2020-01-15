import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import './App.css';
import Page1 from "./components/Page1/page1";
import Page2 from "./components/Page2/page2";
import Page3 from "./components/Page3/page3";
import Page4 from "./components/Page4/page4";
import Page5 from "./components/Page5/page5";
import Page6 from "./components/Page6/page6";


export default class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Page1/>
          </Route>
          <Route exact path="/page2">
            <Page2/>
          </Route>

          <Route exact path="/page3">
            <Page3/>
          </Route>

          <Route exact path="/page4">
            <Page4/>
          </Route>

          <Route exact path="/page5">
            <Page5/>
          </Route>

          
          <Route exact path="/page6">
            <Page6/>
          </Route>

        </Switch>
      </div>
      </Router>
    );
  }
}

