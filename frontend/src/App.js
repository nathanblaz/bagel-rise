import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Footer from "./components/Footer";
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
        <>
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
            <ProtectedRoute path="/thedeli">
              <CheckinsContainer />
            </ProtectedRoute>
            <Route path="/bagelshops" exact>
              <BagelShopsContainer />
            </Route>
            <ProtectedRoute path="/bagelshops/add" exact={true}>
              <BagelShopForm />
            </ProtectedRoute>
            <ProtectedRoute path="/bagelshops/update/:id">
              <BagelShopUpdateForm />
            </ProtectedRoute>
            <ProtectedRoute path="/bagelshops/delete/:id">
              <DeleteBagelShop />
            </ProtectedRoute>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
