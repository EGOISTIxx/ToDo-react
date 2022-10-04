import React, { useCallback, useId } from 'react'
import { SendOutlined } from '@ant-design/icons'
import { nanoid } from 'nanoid'
import { Form } from 'antd'

import { TodoForm } from '../components/TodoForm/Form'
import { Input } from '../components/UI/Input/Input'
import { FormBody, TodoPageWrapper } from './STodo'
import { TodoList } from '../components/TodoList/TodoList'
import { useDispatch } from 'react-redux'
import { addTodoApi } from '../redux/todos/todosAction'

const TodoPage = () => {
  const { FormButton, FormItem, Heading } = TodoForm

  const [form] = Form.useForm()

  const dispatch = useDispatch<any>()

  const handleFinish = useCallback(
    (value: { task: string }) => {
      const todo = Object.assign({}, value, {
        id: nanoid(),
        complete: false,
      })

      dispatch(addTodoApi(todo))
      form.resetFields()
    },
    [form]
  )

  return (
    <TodoPageWrapper>
      <TodoForm onFinish={handleFinish} form={form}>
        <Heading>Add task</Heading>
        <FormBody>
          <FormItem
            name='task'
            rules={[{ required: true }]}>
            <Input />
          </FormItem>
          <FormItem>
            <FormButton
              htmlType='submit'
              type='primary'
              icon={<SendOutlined />}
            />
          </FormItem>
        </FormBody>
      </TodoForm>
      <TodoList />
    </TodoPageWrapper>
  )
}

export default TodoPage
