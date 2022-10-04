import { ButtonProps } from 'antd'
import React, { PropsWithChildren } from 'react'
import { StyledButton } from './SButton'

export interface IButtonProps
  extends PropsWithChildren<ButtonProps> {}

export const Button = (props: IButtonProps) => {
  const { children, htmlType, type, ...otherProps } = props

  return (
    <StyledButton
      type={type}
      htmlType={htmlType}
      {...otherProps}>
      {children}
    </StyledButton>
  )
}
