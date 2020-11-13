import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentUserProvider } from "./Components/CurrentUserContext";
import HomeFeedProvider from "./Components/HomeFeedContext";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <HomeFeedProvider>
        <App />
      </HomeFeedProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
