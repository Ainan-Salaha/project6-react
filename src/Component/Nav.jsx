import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Humbermenu from "./Humbermenu";

const Nav = () => {
  const[menushow,setMenu]=useState(false);

  const handlermenu=()=>{
    setMenu(menushow=>!menushow)

  }
 


  return (
    <div className="main_heading ">
      <div className="container_header top">
        <p>The</p>
        <h1>Siren</h1>
      </div>
      <div className="head_nav bottom">
        <div className="nav_bar">
          <ul>
            <h3>
              <li>
                <Link to="/"> Home</Link>
              </li>
            </h3>
            <h3>
              <li>
                <Link to="/bollywood">Bollywood</Link>
              </li>
            </h3>
            <h3>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </h3>
            <h3>
              <li>
                <Link to="/hollywood">Hollywood</Link>
              </li>
            </h3>
            <h3>
              <li>
                <Link to="/fitness">Fitness</Link>
              </li>
            </h3>
            <h3>
              <li>
                <Link to="/food">Food</Link>
              </li>
            </h3>
          </ul>
        </div>
      </div>
      <div className="menu"> 
     <center>
        <button onClick={handlermenu} id='menu_btn' >Menu</button>
     </center>
        <div>{menushow && <Humbermenu/>}</div>
      </div>
    </div>
  );
};

export default Nav;
