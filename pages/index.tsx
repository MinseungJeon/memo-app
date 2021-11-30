import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import store, { add } from "../store";

const Home: NextPage = () => {
  const [text, setText] = useState("");

  const click = () => {
    add(text);
    setText("");
  };

  return (
    <div>
      <h1>TODO</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={click}>+</button>
    </div>
  );
};

export default Home;
