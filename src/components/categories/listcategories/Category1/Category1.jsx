import React, { useState, useEffect } from "react";
import axios from "axios";
import Aos from "aos";

function Category1(props) {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhosts:8081/User/getProductByCategory/Category1`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category1">
      
      <h1>Category 1</h1>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <ul>
        {category.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category1;
