import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div class="card text-center">
  
  <div class="card-body bg-dark text-light py-4">
    <h5 class="card-title">Made with love</h5>
    <p class="card-text"> Created by santhosh</p>
   <NavLink to="./"> <button className="btn btn-primary">Home page</button></NavLink>
  </div>
</div>
  )
}

export default Footer;
