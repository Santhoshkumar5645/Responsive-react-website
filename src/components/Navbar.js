import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <NavLink to="./" className="selected"  > <img class="logo" src="https://img.freepik.com/free-icon/e_318-202945.jpg?size=338&ext=jpg&ga=GA1.2.1431266599.1672221873&semt=sph" alt="" /> </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink to="./" activeClassName="active">
      <li class="nav-item nav-link">Home</li>
      </NavLink>
      <NavLink to="./about" activeClassName="active">
      <li class="nav-item nav-link">About</li>
      </NavLink>
      <NavLink to="./services" activeClassName="active">
      <li class="nav-item nav-link">Services</li>
      </NavLink>
      <NavLink to="./contact" activeClassName="active">
      <li class="nav-item nav-link">Contact</li>
      </NavLink>
       
   </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
