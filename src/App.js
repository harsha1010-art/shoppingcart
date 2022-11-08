import ShoppingCart from "./ShoppingCart";
import "./styles.css";

export default function App(props) {
  const { data } = props;

  return (
    <div className="App">
      <ShoppingCart product={data} />
    </div>
  );
}
