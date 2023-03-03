import React ,{Component} from "react";
import {NavLink} from "react-router-dom";
import queryString from "query-string";


class Products extends Component{

    render(){
        console.log(this.props);

        return(
          <div>
              <NavLink to="/Products/1"> Product 1</NavLink>
              <NavLink to="/Products/2"> Product 2</NavLink>
              <NavLink to="/Products/3"> Product 3</NavLink>
              <NavLink to="/Products/4"> Product 4</NavLink>
          </div>
        )
    };
}

export default Products;