import { createStore } from "redux";

const initialState = {
  text: "",
  list: [],
};

const ADD = "ADD";
const INPUT = "INPUT";

const add = (item: string) => {
  initialState.text = "";

  return {
    type: ADD,
    item,
  };
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        text: state.text,
      };
    case ADD:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

console.log(store.getState());
