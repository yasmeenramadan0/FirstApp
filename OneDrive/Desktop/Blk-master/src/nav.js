import { Link } from "react-router-dom";
import './nav.css'


function Nav(){
    return(


<div className="head">
          <img
            className="img"
            src="https://qahwablk.com/wp-content/uploads/2022/10/Qahwa-BLK.webp"
            alt="logo"
          ></img>
    
          <ul>
            <li>
            <a href="/">HOME</a>
            </li>
            <li>
              <Link to="/main">MENU</Link>
            </li>
            <li >
              <a href="/">About</a>
            </li>
          </ul>
        </div>      
    )
}

export default Nav ; 