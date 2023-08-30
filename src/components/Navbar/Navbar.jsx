import React from 'react';
import "./Navbar.scss";
import Search from '../search/Search';

function Navbar(props) {
    const handleSearch = (query) => {
        // Handle search query here
      };
  return (
    <div className="navbar">
      <button onClick={() => props.onNavbarClick('homec')}>Home</button>
      
      <button onClick={() => props.onNavbarClick('categories')}>Categories</button>
      <button onClick={() => props.onNavbarClick('products')}>Products</button>
      <button onClick={() => props.onNavbarClick('support')}>Support</button>
      <button onClick={() => props.onNavbarClick('about')}>About</button>
      
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default Navbar;
