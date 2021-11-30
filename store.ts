import { createStore } from "redux";

const initialState = {
  list: [],
};

const ADD = "ADD";

export const add = (item: string) => {
  return {
    type: ADD,
    item,
  };
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
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
