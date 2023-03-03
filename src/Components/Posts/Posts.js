
import React from "react";

function Posts(props){
   return <div>Posts {props.postsAttr.length>0 ? props.postsAttr[0].title : ""}</div>;
}

export default Posts;