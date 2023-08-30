import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.scss";
function Product() {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(true);

  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    axios
      .post(
        "http://3.111.118.171:8080/Admin/addProduct",
        values,

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Product added successfully!");
        fetchProducts();
        setValues({});
      })

      .catch((err) => {
        console.log(err);
        alert("Error adding product");
      });
  };

  const update = (e) => {
    e.preventDefault();

    axios
      .put(
        "http://3.111.118.171:8080/Admin/updateProduct",
        values,

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Product updated successfully!");
        fetchProducts();

        setValues({});
        setEdit(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Error updating product");
      });
  };

  const handleEdit = (product) => {
    setEdit(false);

    setValues(product);
  };

  const handleDeleteProduct = (product) => {
    console.log(product);
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(
          "http://3.111.118.171:8080/Admin/deleteProduct/" + `${product.id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          alert("Product deleted successfully!");
          fetchProducts();
        })
        .catch((err) => {
          console.log(err);
          alert("Error deleting product");
        });
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://3.111.118.171:8080/Admin/getAllProducts",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <h2 id="head1">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Select a value:</label>
        <select
          id="my-selector"
          name="category"
          value={values.category}
          onChange={handleChange}
        >
          <option value="">--Please select a category--</option>
          <option value="Category1">Category1</option>

          <option value="Category2">Category2</option>
          <option value="Category3">Category3</option>
          <option value="Category4">Category4</option>
          <option value="Category5">Category5</option>
        </select>

        <br />
        <br />

        <br />
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={values.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <label>Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <label>Description:</label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <br />
        <div className="btn">
          <button id="sbtn" onClick={edit ? handleSubmit : update}>
            {edit ? "Submit" : "Update"}
          </button>
        </div>
      </form>
    

      <div className="product-list">
        <h2 id="head2">Product List</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Price</th>

              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.category}</td>

                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
