import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import './App.css';
import Exchange from './components/Exchange';
import Currencies from './components/Currencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
   <Layout className='app' style={{minHeight: '100vh'}}>
      <Navbar />
      <Layout className="main">
        <Layout className="route">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/exchange">
              <Exchange />
            </Route>

            <Route exact path="/currencies">
              <Currencies />
            </Route>

            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>

            <Route exact path="/news">
              <News />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
        <Footer />
      </Layout>

   </Layout>
  )
}

export default App
