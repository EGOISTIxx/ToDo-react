import React, { useState, useCallback, memo } from 'react'
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  PlusOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { TTodo } from '../../../types/todo'
import { IconButton } from '../../UI/IconButton/IconButton'
import { TodoRow, TodoCol } from './STodo'
import { Input } from '../../UI/Input/Input'
import { useDispatch } from 'react-redux'
import {
  removeTodoApi,
  updateTodoApi,
} from '../../../redux/todos/todosAction'

export const Todo = memo((props: TTodo) => {
  const { id, task, complete } = props

  const dispatch = useDispatch<any>()

  const [isEdit, setIsEdit] = useState(false)
  const [editTodo, setEditTodo] = useState<string>('')

  const handleToggle = useCallback(() => {
    setIsEdit((prevValue) => !prevValue)
  }, [])

  const handleChangeTodo = useCallback(() => {
    dispatch(updateTodoApi({ ...props, task: editTodo }))
    handleToggle()
  }, [handleToggle, editTodo, props, dispatch])

  const handleRemoveTodo = useCallback(() => {
    dispatch(removeTodoApi(id))
  }, [id, dispatch])

  const handleChangeComplete = useCallback(() => {
    dispatch(
      updateTodoApi({ ...props, complete: !complete })
    )
  }, [props, complete, dispatch])

  return (
    <TodoRow>
      <TodoCol span={20} complete={complete ? 1 : 0}>
        {isEdit ? (
          <Input
            defaultValue={task}
            onChange={(
              e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement
              >
            ) => setEditTodo(e.target.value)}
          />
        ) : (
          task
        )}
      </TodoCol>
      <TodoCol span={4}>
        {!isEdit ? (
          <IconButton
            onClick={handleToggle}
            type='primary'
            icon={<EditOutlined />}
          />
        ) : (
          <IconButton
            onClick={handleChangeTodo}
            type='primary'
            icon={<CheckOutlined />}
          />
        )}
        <IconButton
          type='primary'
          onClick={handleRemoveTodo}
          icon={<DeleteOutlined />}
        />
        {complete ? (
          <IconButton
            type='primary'
            onClick={handleChangeComplete}
            icon={<CloseOutlined />}
          />
        ) : (
          <IconButton
            type='primary'
            onClick={handleChangeComplete}
            icon={<PlusOutlined />}
          />
        )}
      </TodoCol>
    </TodoRow>
  )
})
