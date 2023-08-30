import React, { useState } from "react";
import LogoutLogo from "../../Pages/login/LogoutLogo";

import UserLogo from "../../Pages/userlogo/UserLogo";
import "./Head.scss";

function Head() {
  return (
    <div>
      <div className="head">
        <div className="head-container">
          <LogoutLogo />

          <UserLogo />
        </div>
      </div>
    </div>
  );
}

export default Head;
