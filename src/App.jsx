import React, { StrictMode,useState } from "react";
import { CartContext } from "./contexts.jsx";
import { createRoot } from "react-dom/client";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import Header from "./Header.jsx";
const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

root.render(React.createElement(App));
