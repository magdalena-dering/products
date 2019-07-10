import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ProductsView from "../ProductsView/ProductsView";
import ProductView from "../ProductView/ProductView";

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ProductsView} />
      <Route exact path="/products/:productId" component={ProductView} />
    </Switch>
  </Router>
);

export default AppRouter;
