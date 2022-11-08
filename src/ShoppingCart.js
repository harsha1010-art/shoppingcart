import { useState } from "react";

const ShoppingCart = (props) => {
  const { product } = props;
  const [list, setList] = useState(product);

  const increment = (id) => {
    const newList = [...list];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i] === id) {
        newList[i].count += 1;
      }
    }
    setList(newList);
  };
  const decrement = () => {
    const newObj = {
      ...list,
      count: list.count - 1
    };
    setList(newObj);
  };

  return (
    <div className="App">
      {list.map((val) => (
        <p key={val.id}>
          {val.name}:{val.count}
          <button onClick={() => increment(val.id)}>+</button>
          <button onClick={decrement}>-</button>
        </p>
      ))}
    </div>
  );
};

export default ShoppingCart;
