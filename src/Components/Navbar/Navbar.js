import React ,{Component} from "react";
import {NavLink} from "react-router-dom";


class Navbar extends Component{
    render(){

        return(
          <div>
              <NavLink to="/"> Home</NavLink>
              <NavLink to="/contact"> Contact</NavLink>
              <NavLink to="/About"> About</NavLink>
              <NavLink to="/Products">Products</NavLink>
              <NavLink to="/Posts">Posts</NavLink>

          </div>
        )
    };
}

export default Navbar;