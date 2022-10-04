import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoReducer from './todos/todosReducer'

const reducers = combineReducers({
  todo: todoReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
