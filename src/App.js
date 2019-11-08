import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import RenderPage from './renderPage'
import ConfigPage from './configPage'
import InterfaceConfigPage from './interfaceConfig/configPage'
import InterfaceRenderPage from './interfaceConfig/renderPage'
import Home from './home'
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
            <InterfaceConfigPage />
          </Route>
          <Route path="/render">
            <InterfaceRenderPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
