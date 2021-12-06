const initialState: any = {
  list: [],
};

const ADD = "ADD";
const DEL = "DEL";
const UPDATE = "UPDATE";

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: state.list.concat(action),
      };
    case DEL:
      return {
        list: state.list.filter((listItem: any) => listItem.id !== action.id),
      };
    case UPDATE:
      return;
    default:
      return state;
  }
}

export default reducer;
