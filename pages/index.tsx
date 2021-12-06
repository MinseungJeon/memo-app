import type { NextPage } from "next";
import { useState, ChangeEvent } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListItem } from "../src/redux/modules/Todo/types";

const Home: NextPage = () => {
  const [text, setText] = useState<String>("");
  const [updateTodo, setUpdateTodo] = useState<ListItem>({ id: 0, text: "" });
  const [edit, setEdit] = useState<Boolean>(false);

  const todos = useSelector((state: any) => state.todos);

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setText(value);
  };

  const add = () => {
    dispatch({ type: "ADD", text, id: Date.now() });
  };

  const del = (id: number) => {
    dispatch({ type: "DEL", id });
  };

  const update = (selectedTodo: ListItem) => {
    setUpdateTodo(selectedTodo);
  };

  const confirm = () => {
    dispatch({ type: "UPDATE", updateTodo });
    setText("");
    setUpdateTodo({ id: 0, text: "" });
  };

  return (
    <div>
      <h1>MEMO</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={add}>+</button>

      <ul>
        {todos.map((todo: ListItem) => {
          return todo.id !== updateTodo.id ? (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => del(todo.id)}>삭제</button>
              <button onClick={() => update(todo)}>수정</button>
            </li>
          ) : (
            <li key={todo.id}>
              <input
                value={updateTodo.text}
                onChange={(e) =>
                  setUpdateTodo({ ...updateTodo, text: e.target.value })
                }
              />
              <button onClick={() => del(todo.id)}>삭제</button>
              <button onClick={confirm}>저장</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
