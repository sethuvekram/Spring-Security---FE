import React, { useEffect, useState } from 'react'
import SellerPage from '../SellerPage/SellerPage';
import AdminPage from '../AdminPage/AdminPage';
import Dashboard from '../../components/dashboard/Dashboard';
import Logout from '../../functions/AutoLogout';
// import Logout from "../"

const Home = () => {
    const [role, setRole] = useState("");
  
    useEffect(() => {
      const storedRole = localStorage.getItem("role");
      setRole(storedRole);
    }, []);
  
    const timeout = 5*60*1000;  //5 minutes of milliseconds
    return (
      <div className="home">
        {role === "BUYER" && <Dashboard />}
  
        {role === "SELLER" && <SellerPage />}
        {role === "ADMIN" && <AdminPage />}
        <Logout timeout={timeout} />
      </div>
    );
  };
  
  export default Home;
  
