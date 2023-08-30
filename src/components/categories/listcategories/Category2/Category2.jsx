import React from "react";
import './Category2.scss';
import AOS from "aos";
import { useEffect } from "react";
const Category2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Categorie2" data-aos="fade">
          <div className="header">
            <h3>Categorie 2</h3>
          </div>
      <div className="products">
    
        <div className="listproducts">
            <div className="list1" data-aos="flip-up">
          <div className="product1">
            <h1>products name details</h1>
          </div>
          <div className="product2">
            {" "}
            <h1>products name details</h1>
          </div>
          <div className="product3">
            <h1>products name details</h1>
          </div>
          <div className="product4">
            <h1>products name details</h1>
          </div>
          <div className="product5">
            <h1>products name details</h1>
          </div>
          </div>
          <br/>
          <br/>
          <div className="list2"  data-aos="flip-up">
          <div className="product6">
            <h1>products name details</h1>
          </div>
          <div className="product7">
            {" "}
            <h1>products name details</h1>
          </div>
          <div className="product8">
            <h1>products name details</h1>
          </div>
          <div className="product9">
            <h1>products name details</h1>
          </div>
          <div className="product10">
            <h1>products name details</h1>
          </div>

          </div>
          <br/>
          <br/>
          <div className="list3"  data-aos="flip-up">
          <div className="product11">
            <h1>products name details</h1>
          </div>
          <div className="product12">
            {" "}
            <h1>products name details</h1>
          </div>
          <div className="product13">
            <h1>products name details</h1>
          </div>
          <div className="product14">
            <h1>products name details</h1>
          </div>
          <div className="product15">
            <h1>products name details</h1>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category2;