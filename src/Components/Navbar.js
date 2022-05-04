import React  from "react";
import {Link} from 'react-router-dom'



 function Navbar() {
  return (
    <nav className="nav">
        <div className="left-div">
          <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
          </Link>
          
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://cdn-icons-png.flaticon.com/512/751/751381.png"
            alt="search-img"
          />
          <input placeholder="Search...." />
          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1651510143~hmac=6d418627e90657d183b5f66ad567259f"
                  alt="user-dp"
                />
                <span>John Fucker</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1651510143~hmac=6d418627e90657d183b5f66ad567259f"
                  alt="user-dp"
                />
                <span>John Fucker</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1651510143~hmac=6d418627e90657d183b5f66ad567259f"
              alt="user-dp"
              id="user-dp"
            />
            <span>John Fucker</span>
          </div>
          <div className="nav-links">
            <ul>
              <li><Link to="/login">LOG in</Link></li>
              <li><Link to="/logout">LOG out</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}


export default Navbar;
