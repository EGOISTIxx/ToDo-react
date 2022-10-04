import { FormItemProps, FormProps } from 'antd'
import React, { PropsWithChildren } from 'react'
import { Button, IButtonProps } from '../UI/Button/Button'
import {
  StyledForm,
  StyledFormItem,
  StyledTodoHeading,
} from './SForm'

interface IFormProps extends PropsWithChildren<FormProps> {}

interface IFormItemProps
  extends PropsWithChildren<FormItemProps> {}

function TodoForm(props: IFormProps) {
  const { children, ...otherProps } = props

  return <StyledForm {...otherProps}>{children}</StyledForm>
}

module TodoForm {
  export const FormItem = (props: IFormItemProps) => {
    const { children, ...otherProps } = props

    return (
      <StyledFormItem {...otherProps}>
        {children}
      </StyledFormItem>
    )
  }

  export const Heading = (props: PropsWithChildren<{}>) => {
    const { children } = props

    return <StyledTodoHeading>{children}</StyledTodoHeading>
  }

  export const FormButton = (props: IButtonProps) => {
    const { children, type, htmlType, ...otherProps } =
      props

    return (
      <Button
        type={type}
        htmlType={htmlType}
        {...otherProps}>
        {children}
      </Button>
    )
  }
}

export { TodoForm }
