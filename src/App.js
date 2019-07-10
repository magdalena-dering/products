import React from "react";
import { Container } from "react-grid-system";
import Router from "./components/Router";
import Global from "./components/Global";

const App = () => (
  <>
    <Global />
    <Container>
      <Router />
    </Container>
  </>
);

export default App;
