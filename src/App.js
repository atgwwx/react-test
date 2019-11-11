import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import InterfaceConfigPage from './pages/interfaceConfig/configPage'
import InterfaceRenderPage from './pages/interfaceConfig/renderPage'
import List from './pages/interfaceConfig/list'
import AppLayout from './common/AppLayout'
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/interfaceConfig">
              <InterfaceConfigPage />
            </Route>
            <Route path="/interfaceRender">
              <InterfaceRenderPage />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AppLayout>
      </Router>

    </div>
  );
}

export default App;
