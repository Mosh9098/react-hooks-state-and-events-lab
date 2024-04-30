import {useState} from "react";

function Item({ id, name, category }) {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        Add to Cart</button>
    </li>
  );
}

export default Item;
