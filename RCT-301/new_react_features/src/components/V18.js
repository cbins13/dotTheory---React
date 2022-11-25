import React, { useState, useEffect } from "react";
const V18 = () => {
  const [timer, setTimer] = useState(0);
  const [el, setEl] = useState(0);
  const [el1, setEl1] = useState(0);
  const [el2, setEl2] = useState("");

  useEffect(() => {}, []);

  const timeout = setTimeout(() => {
    setTimer((n) => n + 1);
    if (timer <= 30) {
      setEl((n) => n + 1);
      setEl1((n) => n + 2);
      setEl2(`This is a component`);
    } else {
      return () => clearTimeout(timeout);
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
          <ul>
            <li>Add with 1: {el}</li>
            <li>Add with 2: {el1}</li>
            <li>{el2}</li>
          </ul>
        </li>

        <li key={10}>
          Transitions - this is used to distinguish between urgent and
          non-urgent updates.{" "}
        </li>
        <li key={11}>
          New Suspense Features - according to the React 18 docs, this feature
          is best used together with the transition API.{" "}
        </li>
        <li key={12}>
          New Client and Server Rendering APIs - React 18 takes a different
          approach in exposing APIs to both the client and the server. For
          example, the React DOM Client now uses createRoot API from
          react-dom/client instead of the ReactDOM.render method.
        </li>
        <li key={13}>
          New Strict Mode Behaviors - in development mode, Strict mode will add
          further steps to ensure the reusable state. This includes simulating
          both unmounting the component and mounting the component.
        </li>
        <li key={14}>
          New Hooks - some of the hooks added in React 18 are:
          <br />
          <ul>
            <li>useId - generates unique IDs for both client and the server</li>
            <li>useTransition - marks state updates as not urgent</li>
            <li>
              useDeferredValue - defers re-rending a non-urgent part of the tree
            </li>
            <li>
              useSyncExternalStore - intended to be used by libraries, this hook
              allows external stores to support concurrent reads by forcing
              updates to the store to be synchronous
            </li>
            <li>
              useInstertionEffect - allows CSS-inJS libraries to address
              performance issues of injecting styles in render.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default V18;
