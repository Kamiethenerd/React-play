/* const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.ingredients),
  ]);
}; */
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
