import React from "react";
import Posts from "./Posts";

const Main = ({posts}) => {
  return <div className="mainContainer">
    <Posts posts={posts}/>
  </div>;
};

export default Main;
