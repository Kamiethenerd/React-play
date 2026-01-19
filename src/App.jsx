import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";
const container = document.getElementById("root");
const root = createRoot(container);


const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza Order Now</h1>
      <Pizza name="Pepperoni Pizza" ingredients="Mozzarella, Pepperoni, Tomato Sauce" />
      <Pizza name="Margherita Pizza" ingredients="Mozzarella, Tomato Sauce, Basil" />
      <Pizza name="Hawaiian Pizza" ingredients="Mozzarella, Ham, Pineapple, Tomato Sauce" />
    </div>
  )
};




root.render(React.createElement(App));
