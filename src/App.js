import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import {
  BrowserRouter,
  Route,
  Router,
  NavLink,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Posts from "./Components/Posts/Posts";
import axios from "axios";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        posts: response.data,
      });
    });
  }

  render() {
    console.log("posts", this.state.posts);

    return (
      <div>
        <BrowserRouter>
          <Posts postsAttr={this.state.posts} />

          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route  path="/Posts" exact element={<Posts/>} /> */}
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Products" exact element={<Products />} />
            <Route path="/Products/:id" exact element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
