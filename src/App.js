import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./Layout";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";

const App = () => (
  <Router>
    <Header>
      <NavBar />
    </Header>
    <Layout>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/products/:slug">
          <Products />
        </Route>
      </Switch>
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
export default App;
