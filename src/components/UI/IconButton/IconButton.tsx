import { ButtonProps } from 'antd'
import React, { memo } from 'react'
import { StyledIconButton } from './SIconButton'

interface IIconButtonProps extends ButtonProps {}

export const IconButton = memo<IIconButtonProps>(
  (props) => {
    const { type, icon, ...otherProps } = props

    return (
      <StyledIconButton
        type={type}
        icon={icon}
        {...otherProps}
      />
    )
  }
)
