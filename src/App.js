import React, { useState } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Categories from "./pages/Categories/Categories";
import Form from "./pages/Form/Form";

import CartContext from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Sport Store";

  return (
    <div>
      <BrowserRouter>
    <Route>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/CssBaseline' element={<CssBaseline />} />
      <Route path='/ItemDetailPage/:id' element={<ItemDetailPage />} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Form' element={<Form/>} />
      <Route path='/Categories' element={<Categories/>} />
      <Route path='/CartContext' element={<CartContext/>} />
      <Route path='/Footer' element={<Footer/>} />
      <Route path='/Navbar' element={<Navbar/>} />
      </CartContext.Provider>
    </Route>
    
</BrowserRouter>
    </div>
  );
}

export default App;
