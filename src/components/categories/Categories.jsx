import React, { useState } from "react";
import "./Categories.scss";
import { Link, Outlet} from "react-router-dom";



function Categories() {
  return (
    <div className="categories">
      <div className="left">
        <h2>Categories</h2>
        
          <ul>
            <li>
              <Link to={`/home`}  className="link-button">Category 1</Link>
            </li>
            <li>
              <Link to={`/home/category2`} className="link-button" > Category 2</Link>
            </li>
            <li>
              <Link to={`/home/category3`} className="link-button">Category 3</Link>
            </li>
            <li>
              <Link to={`/home/category4`} className="link-button">Category 4</Link>
            </li>
            <li>
              <Link to={`/home/category5`} className="link-button">Category 5</Link>
            </li>
          </ul>
        
      </div>
      {/* {renderCategory()} */}
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}

export default Categories;
