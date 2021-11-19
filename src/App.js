import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/header/index';
import Home from "./components/pages/home/index";
import Checkout from "./components/pages/checkout/index";
import Login from "./components/pages/login/index";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/checkout">
           <Header />
            <Checkout />
          </Route>
            <Route path="/login">
              <Login />
          </Route>
           <Route path="/">
             <Header />
             <Home />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
