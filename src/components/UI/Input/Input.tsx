import { InputProps } from 'antd'
import { memo } from 'react'
import { StyledInput } from './SInput'

interface IInputProps extends InputProps {}

export const Input = memo<IInputProps>((props) => {
  const { ...otherProps } = props

  return <StyledInput {...otherProps} />
})
