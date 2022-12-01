import React from "react";

const Gif = (props) => {
  return (
    <li className="gif-wrap" key={props.id}>
      <img src={props.url} alt="" />
    </li>
  );
};

export default Gif;
