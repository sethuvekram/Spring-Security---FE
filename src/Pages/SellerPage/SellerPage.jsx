import React from "react";
import "./SellerPage.scss";

const SellerPage = () => {
  return (
    <div className="seller-page">
      <h1 className="seller-page__title">Welcome, seller!</h1>
      <p className="seller-page__subtitle">
        Here's some content that's specific to sellers.
      </p>
      <form className="seller-page__form">
        <div className="seller-page__form-group">
          <label htmlFor="item-name">Item Name:</label>
          <input type="text" id="item-name" name="item-name" required />
        </div>
        <div className="seller-page__form-group">
          <label htmlFor="item-price">Item Price:</label>
          <input type="number" id="item-price" name="item-price" required />
        </div>
        <button className="seller-page__button">Add Item</button>
      </form>
      <table className="seller-page__table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>$10</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>$20</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Item 3</td>
            <td>$30</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SellerPage;
