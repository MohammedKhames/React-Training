import React ,{Component} from "react";
import List from "../List/List";

class  Contact extends Component{

  state={
    products:[
      {id:1, name:"computer"},
      {id:2, name:"laptop"},
      {id:3, name:"mobile"}

       ]
  };
    render(){

        return(
          <div>

            {/* showing data by state in same page */}


             {/* {this.state.products.map(function(ele){
                  return <div>{ele.name}</div>;
             })} */}

             <List sendState={this.state.products}/>


          </div>
        )
    };
}

export default Contact;