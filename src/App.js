import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/index';
import Home from "./components/pages/home/index";
import Checkout from "./components/pages/checkout/index";
import Login from "./components/pages/login/index";
import Categories from "./components/categories/index";


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
             <Categories />
             <Home />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
