import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import store from "../store";
import { useDispatch } from "react-redux";

const Home: NextPage = () => {
  const [text, setText] = useState("");

  const list = useSelector((state: any) => state.list);

  const dispatch = useDispatch();

  const click = () => {
    dispatch({ type: "ADD", item: text });
  };

  return (
    <div>
      <h1>MEMO</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={click}>+</button>

      <ul>
        {list.map((a: string, i: number) => {
          return <li key={i}>{a}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
