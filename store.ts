import { createStore } from "redux";

const initialState: any = {
  list: [],
};

const ADD = "ADD";

function reducer(state = initialState, action: any) {
  console.log(action);
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
