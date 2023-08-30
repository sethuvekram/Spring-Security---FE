import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import axios from "axios";
import LogoutLogo from "../login/LogoutLogo";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const ColorEnum = Object.freeze({
    ADMIN: 'ADMIN',
    SELLER: 'SELLER',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/Admin/getAllUsers",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setEditing(true);
    setEditedUser(user);
  };

  const handleSave = () => {
    console.log(editedUser);
    axios
      .put(`http://localhost:8080/Admin/updateUser`, editedUser, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("User Updated Successfully");
        fetchUsers();
        setEditedUser({});
        setEditing(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Error updating User");
      });
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedUser({});
  };
  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8080/Admin/deleteUser/${userId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        setUsers(users.filter((user) => user.userId !== userId));
        alert("User Deleted Successfully");
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="admin-page">
      <h1 className="admin-page__title">
        Welcome, Admin!
        <div className="inventory">
          <Link to="/product">
            <InventoryIcon />
          </Link>
          <LogoutLogo />
        </div>
      </h1>

      <p className="admin-page__subtitle">
        Here's some content that's specific to admins.
      </p>
      <div className="admin-page__user-management">
        <h2>User Management</h2>
        <table className="admin-page__table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>

              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {!editing && (
                    <>
                      <button onClick={() => handleEdit(user)}>Edit</button>
                      <button onClick={() => handleDelete(user.userId)}>
                        Delete
                      </button>
                    </>
                  )}
                  {editing && editedUser.userId === user.userId && (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editing && (
          <div>
            <h3>Edit User</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Role:
              <input
                type="text"
                name="role"
                value={editedUser.role}
                onChange={handleInputChange}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminPage;
