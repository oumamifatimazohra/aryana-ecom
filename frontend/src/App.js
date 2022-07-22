import React from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import "./index.css";
import { useSelector } from "react-redux";


function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
          <Link className="brand" to="/">aryana</Link>
      </div>
      <div>
          <Link to="/cart">Cart
           {cartItems.length > 0 && (
             <span className="badge">{cartItems.length}</span>
           )}
          </Link>
          <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <main>
    <Routes>
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/cart/:id" element={<CartScreen />} />
    <Route  path="/product/:id"  element={<ProductScreen />} exact />
    <Route path="/" element={<HomeScreen />} exact />
    </Routes>
    
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
