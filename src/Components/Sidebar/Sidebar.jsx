import React from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className="header">
                <NavLink activeClassName='active-link' to='/'>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-home"></i>
          <p className="text-center text-white">Home</p>
        </a>
        </NavLink>
        <a className="text-center" href="">
          <i class=" text-center text-white far fa-chart-bar"></i>
          <p className="text-center text-white">Use case</p>
        </a>
        <a className="text-center" href="">
          <img className="hive__logo" src="hive.JPG"></img>
          <p className="text-center text-white">Hive feature</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white far fa-list-alt"></i>
          <p className="text-center text-white">Hive Invest</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-chart-pie"></i>
          <p className="text-center text-white">Tokenamics</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-user-friends"></i>
          <p className="text-center text-white">Team</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white far fa-copy"></i>
          <p className="text-center text-white">White paper</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-phone"></i>
          <p className="text-center text-white">Contact us</p>
        </a>
      </div>
        </div>
    )
}

export default Sidebar
