import React, {Component} from "react";


class List extends Component{
    render(){

        return(

             this.props.sendState.map(function(ele){
                  return <div>{ele.name}</div>;
             }
             )
        );
    }
}

export default List;