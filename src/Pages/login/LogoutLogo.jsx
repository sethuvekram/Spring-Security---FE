import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


function LogoutLogo() {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <div className="login-logo" >
     <button onClick={handleLogout}><LogoutIcon/></button>
    </div>
  );
}

export default LogoutLogo;
