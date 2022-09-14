import React from "react";
import "./topbar.css";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { logout } from "../../redux/UserRedux";


export default function Topbar() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin;
  const dispatch = useDispatch()
  const handleLogout = ()=>{
  
    dispatch(logout())

  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shopify-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
       {admin ?
       <Link to='/login'>
            <span className="topIconBadge" onClick={handleLogout}>Logout</span></Link>:<span className="topIconBadge">Login</span>}
          </div>
         
          <img src="https://i.guim.co.uk/img/media/af4d7afd0bff38f9b234380cde359c9a8cebbe52/0_201_3766_2261/master/3766.jpg?width=620&quality=85&fit=max&s=d123292fe56e88d642eb418cafb7c008" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
