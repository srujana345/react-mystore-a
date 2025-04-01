import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";

export default function Header() {
  const { user , setUser} = useContext(appContext);

  return (
    <div className="App-Header-row">
      <h1>My React Store</h1>
      <div className="App-Header-links">
        <Link to="products" className="App-Header-Link">Home</Link>
        <Link to="cart" className="App-Header-Link">Cart</Link>
        {user.name === "" ? (
          <Link to="login" className="App-Header-Link">Login</Link>
        ) : (
          <Link to="login" className="App-Header-Link" onClick={()=>setUser({name:"",email:"",password:""})}>Logout</Link>
        )}
      </div>
    </div>
  );
}