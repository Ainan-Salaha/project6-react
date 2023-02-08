import React from 'react'
import { Link } from "react-router-dom";
import "./header.css";


const Humbermenu = () => {
  return (
    <div>
        
        <div className="main_menu">
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
  )
}

export default Humbermenu