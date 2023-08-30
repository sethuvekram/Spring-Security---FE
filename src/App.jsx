import React from "react";

import Login from "./Pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/register/Registration";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Categories from "./components/categories/Categories";
import Category1 from "./components/categories/listcategories/Category1/Category1";
import Category2 from "./components/categories/listcategories/Category2/Category2";
import Category3 from "./components/categories/listcategories/Category3/Category3";
import Category4 from "./components/categories/listcategories/Category4/Category4";
import Category5 from "./components/categories/listcategories/Category5/Category5";
import Products from "./components/products/Products";
import Product from "./Pages/AdminPage/product/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Category1 />} />
            <Route path="category2" element={<Category2 />} />
            <Route path="category3" element={<Category3 />} />
            <Route path="category4" element={<Category4 />} />
            <Route path="category5" element={<Category5 />} />
          </Route>

          <Route path="/products" element={<Products/>}  />
          <Route path="/product" element={<Product/>}  />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
