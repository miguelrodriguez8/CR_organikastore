import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog";
import Home from "./components/home";
import Todo from "./components/todo";
import Cart from './components/cart';

import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <div className="App container-fluid">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalog" component={Catalog}></Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </div>

      <div className="App-footer">
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
