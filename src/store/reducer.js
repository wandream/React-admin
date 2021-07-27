import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "./constants.js";

const initialStat = {
  counter: 0,
  list: [
    {
      content: "1",
      done: true,
    },
    {
      content: "111",
      done: false,
    },
  ],
};

function reducer(state = initialStat, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case ADD_TODO:
      return {
        ...state,
        list: state.list.concat(action.todo),
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.todo),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        list: state.list.filter((item, index) => {
          if (index === action.todo) {
            return (item.done = true);
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
}

export default reducer;
