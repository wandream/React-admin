import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from "./constants.js";

const addAction = (count) => ({
  type: ADD_NUMBER,
  num: count,
});

const subAction = (count) => ({
  type: SUB_NUMBER,
  num: count,
});

const addTodo = (value) => ({
  type: ADD_TODO,
  todo: value,
});

const deleteTodo = (value) => ({
  type: DELETE_TODO,
  todo: value,
});

const completeTodo = (value) => ({
  type: COMPLETE_TODO,
  todo: value,
});

export { addAction, subAction, addTodo, deleteTodo, completeTodo };
