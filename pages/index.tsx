import type { NextPage } from "next";
import { useState } from "react";

import { useSelector } from "react-redux";
import store from "../store";

const Home: NextPage = () => {
  const list = useSelector((state) => state.list);

  return (
    <div>
      <h1>TODO</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          store.dispatch({ type: add, input });
        }}
      >
        +
      </button>
    </div>
  );
};

export default Home;
