import React, { useState } from "react";

const Button = () => {
  const [clicked, setClicked] = useState("");

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setClicked({ clicked: null });
        }}
      >
        Click me to produce an error!
      </button>
      <h4>{clicked}</h4>
    </div>
  );
};

export default Button;
