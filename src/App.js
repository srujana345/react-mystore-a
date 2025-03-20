import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Login from "./components/Login"; 
import Cart from "./components/Cart"; 
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} /> 
          <Route path="cart" element={<Cart />}></Route>
           <Route path="register" element={<Register/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
