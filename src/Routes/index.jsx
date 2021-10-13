import { Route, Switch } from "react-router";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/CartPage">
        <CartPage />
      </Route>
    </Switch>
  );
}

export default Routes;
