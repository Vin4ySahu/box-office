import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        This is starred
      </Route>

      <Route> This is 404 page</Route>
    </switch>
  );
}

export default App;
