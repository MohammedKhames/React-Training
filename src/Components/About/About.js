import React ,{Component} from "react";

class About extends Component{


  state={
    Product:""
  };


  handleChange = (e)=>{
    this.setState({
      Product: e.target.value
    });
  };


  handleSumbit = (e)=>{
     e.preventDefault();
     console.log(this.state.Product);
  };

  
    render(){

        return(
          <div>
             <form onSubmit={this.handleSumbit}>
              <input type="text" onChange={this.handleChange} />
              <input type="submit" value="Add" />
             </form>
          </div>
        )
    };
}

export default About;