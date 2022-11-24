import React, { useState, useEffect} from "react";
const V18 = () => {
  const [timer, setTimer] = useState(0);
  const [el, setEl] = useState(0);
  const [el1, setEl1] = useState(0);
  const [el2, setEl2] = useState("");

  useEffect(() => {}, []);

  const timeout = setTimeout(() => {
    setTimer(n => n+1);
    if(timer <= 30){
        setEl((n) => n + 1);
        setEl1((n) => n + 2);
        setEl2(`This is a component`);
    }else {
        return () => clearTimeout(timeout)
    }
  }, 1000);

  return (
    <div>
      <h2>React v18.x</h2>
      <p>
        React 18 was released on March 29, 2022 and its features are centered on
        'Concurrent React'- a new mechanism that allows React to render
        uninterrupted, but with more flexibility. Here are some of the takeaways
        in this version:
      </p>
      <ul>
        <li key={9} style={{ marginBlock: "2rem" }}>
          Automatic Batching - This feature allows the 3 components below to
          update and re-render only once.
          <span>
            <br />
            Add with 1: {el}
          </span>
          <span>
            <br />
            Add with 2: {el1}
          </span>
          <span>
            <br />
            {el2}
          </span>
        </li>

        <li key={10}>Transitions</li>
        <li key={11}>New Suspense Features</li>
        <li key={12}>New Client and Server Rendering APIs</li>
        <li key={13}>New Strict Mode Behaviors</li>
        <li key={14}>New Hooks</li>
      </ul>
    </div>
  );
};

export default V18;
