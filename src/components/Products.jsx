import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";

export default function Product() {
  const { user, products } = useContext(appContext);

  return (
    <div>
      <h2>Hello {user.name}!</h2>
      <div className="App-Products-row">
        {products && products.length > 0 ? (
          products.map((value, index) => (
            <div className="App-Products-box" key={index}>
              <h3>{value.name}</h3>
              <h4>Price: {value.price}</h4>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
