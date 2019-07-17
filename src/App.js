import React from "react";
import { Container } from "react-grid-system";
import Router from "./components/Router";
import Global from "./components/Global";
import FirebaseTest from "./components/Test/Test";

const App = () => (
  <>
    <Global />
    <Container>
      <FirebaseTest />
      <Router />
    </Container>
  </>
);

export default App;
