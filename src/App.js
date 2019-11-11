import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import InterfaceConfigPage from './interfaceConfig/configPage'
import InterfaceRenderPage from './interfaceConfig/renderPage'
import Layout from './common/Layout'
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
        <Layout>
          <Switch>
            <Route path="/interfaceConfig">
              <InterfaceConfigPage />
            </Route>
            <Route path="/interfaceRender">
              <InterfaceRenderPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
