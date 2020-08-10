import React, { useContext, useEffect } from "react";
import { Container } from "semantic-ui-react";
import Login from "../../features/user/Login";
import NavBar from "../../features/navbar/NavBar";
import LoadingComponent from "./LoadingComponent";
import { RootStoreContext } from "../stores/rootStore";
import { Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, token, appLoaded } = rootStore.commonStore;
  const { getUser } = rootStore.userStore;

  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [getUser, setAppLoaded, token]);
  if (!appLoaded) return <LoadingComponent content="Loading app..." />;

  return (
    <Container>
      <NavBar />
      <Route path="/login" component={Login} />
    </Container>
  );
};

export default observer(App);
