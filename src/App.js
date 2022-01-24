import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Logout from "./components/auth/Logout";
import dasboard from "./components/pages/dashboard";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Contact from "./components/pages/contact";
import orderList from "./components/pages/orderList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dashboard" component={dasboard} />
          <Route exact path="/orderlist" component={orderList} />
          
        </Switch>
        <Footer />

        
      </div>
    </Router>
  );
}

export default App;
