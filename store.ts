import { createStore } from "redux";
import { PropTypes } from "./src/redux/modules/Todo/types";

const initialState: PropTypes = {
  todos: [
    {
      id: Date.now(),
      text: "123",
    },
  ],
};

const ADD = "ADD";
const DEL = "DEL";
const UPDATE = "UPDATE";

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: state.todos.concat({ id: action.id, text: action.text }),
      };
    case DEL:
      return {
        todos: state.todos.filter((listItem: any) => listItem.id !== action.id),
      };
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.updateTodo.id) {
            return action.updateTodo;
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
