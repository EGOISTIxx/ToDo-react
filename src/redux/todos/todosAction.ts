import { TTodo } from '../../types/todo'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const FETCH_TODO = 'FETCH_TODO'

const addTodo = (payload: TTodo) => ({
  type: ADD_TODO,
  payload,
})

const removeTodo = (payload: string) => ({
  type: REMOVE_TODO,
  payload,
})

const fetchTodo = (payload: TTodo[]) => ({
  type: FETCH_TODO,
  payload,
})

const updateTodo = (payload: TTodo[]) => ({
  type: UPDATE_TODO,
  payload,
})

export const fetchTodoApi = () => (dispatch: any) => {
  const todoList = JSON.parse(
    localStorage.getItem('todoList') || '[]'
  )

  dispatch(fetchTodo(todoList))
}

export const addTodoApi =
  (todo: TTodo) => (dispatch: any) => {
    const prevItems = JSON.parse(
      localStorage.getItem('todoList') || '[]'
    )

    const newTodoList = [...prevItems, todo]

    localStorage.setItem(
      'todoList',
      JSON.stringify(newTodoList)
    )

    dispatch(addTodo(todo))
    dispatch(fetchTodoApi())
  }

export const removeTodoApi =
  (id: string) => (dispatch: any) => {
    const todoList = JSON.parse(
      localStorage.getItem('todoList') || '[]'
    )

    const newTodoList = todoList.filter(
      (todo: { id: string }) => todo.id !== id
    )

    localStorage.setItem(
      'todoList',
      JSON.stringify(newTodoList)
    )

    dispatch(removeTodo(id))
    dispatch(fetchTodoApi())
  }

export const updateTodoApi =
  (todo: TTodo) => (dispatch: any) => {
    const todoList: TTodo[] = JSON.parse(
      localStorage.getItem('todoList') || '[]'
    )

    const newTodoList = todoList.map((todoItem) => {
      if (todo.id === todoItem.id) {
        todoItem = todo
      }

      return todoItem
    })

    localStorage.setItem(
      'todoList',
      JSON.stringify(newTodoList)
    )

    dispatch(updateTodo(newTodoList))
    dispatch(fetchTodoApi())
  }
