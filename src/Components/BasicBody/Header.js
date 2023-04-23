import React from "react";
import "./Header_Sidebar.css";
import { FaRegUserCircle, FaSearch, FaUser, FaUserAstronaut, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="heder_Container">
        <div className="Header_Text">
          <h1>AssetMax</h1>
        </div>
        <div className="U_search">
            <input type="text" />
            <FaSearch/>
          </div>
        <div className="User_search">
          
          <div className="User">
            <FaUserCircle/>
          </div>
          <div className="U_user">
            <select name="" id="">
              <option value="">User</option>
              <option value="">Profile</option>
              <option value="">Logout</option>
            </select>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
