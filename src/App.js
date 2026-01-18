const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.ingredients),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      ingredients: "Mozzarella, Pepperoni, Tomato Sauce",
    }),
    React.createElement(Pizza, {
      name: "Margherita Pizza",
      ingredients: "Mozzarella, Tomato Sauce, Basil",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      ingredients: "Mozzarella, Ham, Pineapple, Tomato Sauce",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
