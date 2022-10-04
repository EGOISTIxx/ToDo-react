import { TTodo } from '../../types/todo'
import {
  ADD_TODO,
  FETCH_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from './todosAction'

const initialState: TTodo[] = []

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case REMOVE_TODO:
      return state.filter(
        (todo) => todo.id !== action.payload
      )
    case FETCH_TODO:
      return action.payload
    case UPDATE_TODO:
      return action.payload
    default:
      return state
  }
}

export default todoReducer
