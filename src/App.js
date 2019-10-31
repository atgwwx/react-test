import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import RenderPage from './renderPage'
import ConfigPage from './configPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/config">
            <ConfigPage />
          </Route>
          <Route path="/render">
            <RenderPage />
          </Route>
          <Route path="/">
            <div>hello world</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
