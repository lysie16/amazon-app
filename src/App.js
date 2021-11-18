import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/header/index';
import Home from './components/home/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <div>Checkout</div>
          </Route>
            <Route path="/login">
              <div>Login Page</div>
          </Route>
           <Route path="/">
             <Header />
             <Home />
             <div>Home Page</div>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
