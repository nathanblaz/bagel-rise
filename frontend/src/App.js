import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CheckinsContainer from "./components/CheckinsContainer/CheckinsContainer";
import SplashContainer from "./components/SplashContainer";
import BagelShopForm from "./components/BagelShopForm";
import BagelShopsContainer from "./components/BagelShopsContainer";
import BagelShopUpdateForm from "./components/BagelShopUpdateForm";
import DeleteBagelShop from "./components/DeleteBagelShop";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <SplashContainer />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/thedeli">
            <CheckinsContainer />
          </Route>
          <Route path="/bagelshops" exact>
            <BagelShopsContainer />
          </Route>
          <Route path="/bagelshops/add">
            <BagelShopForm />
          </Route>
          <Route path="/bagelshops/update/:id">
            <BagelShopUpdateForm />
          </Route>
          <Route path="/bagelshops/delete/:id">
            <DeleteBagelShop />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
