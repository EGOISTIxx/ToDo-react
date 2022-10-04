import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { fetchTodoApi } from '../../redux/todos/todosAction'
import { TTodo } from '../../types/todo'
import { Todo } from './components/Todo'
import {
  TodoListWrapperRow,
  TodoListWrapperCol,
} from './STodoList'

export const TodoList = () => {
  const dispatch = useDispatch<any>()

  const todos = useSelector(
    (state: { todo: [] }) => state.todo
  )

  useEffect(() => {
    dispatch(fetchTodoApi())
  }, [dispatch])

  return (
    <TodoListWrapperRow justify='center'>
      <TodoListWrapperCol span={24}>
        {!todos.length && (
          <span>У вас ещё нет ни одной задачи</span>
        )}
        {todos.map((todo: TTodo) => {
          const { complete, id, task } = todo

          return (
            <Todo
              key={id}
              id={id}
              complete={complete}
              task={task}
            />
          )
        })}
      </TodoListWrapperCol>
    </TodoListWrapperRow>
  )
}
