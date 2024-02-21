import React from "react";
import "./App.scss";
import RouterConfig from "./router-config/RouterConfig";
import { ErrorBoundary } from "./pages/error-boundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RouterConfig />
      </ErrorBoundary>
    </div>
  );
}

export default App;
