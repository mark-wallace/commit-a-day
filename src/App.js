import React from "react";
import "./styles/Index.css";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./components/ProductList";
import Route from "./components/Route";
import Server from "./Server.js";
import Product from "./components/Product";

Server();

const App = () => {
  return (
    <React.StrictMode>
      <Route path="/">
        <ProductList />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </React.StrictMode>
  );
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
