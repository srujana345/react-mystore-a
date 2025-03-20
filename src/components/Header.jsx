import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="App-Header-row">
      <h1>My React Store</h1>
      <div className="App-Header-links"> 
         <Link to="products" className="App-Header-Link">Home</Link>
         <Link to="cart" className="App-Header-Link">Cart</Link>
         <Link to="login" className="App-Header-Link">Login</Link>
       </div>
    </div>
  );
}