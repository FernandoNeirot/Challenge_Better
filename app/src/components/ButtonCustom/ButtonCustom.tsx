import React from 'react'

import { Button, Icon } from './ButtonCustom.styled'
import { Props } from './interfaces'

export const ButtonCustom: React.FC<Props> = ({
  icon = null,
  onClick,
  label,
  background = '#000',
  color = '#fff',
}) => {

  return (
    <Button
      onClick={onClick}      
      background={background}
      color={color}
    >
      {icon && <Icon>{icon}</Icon>}
      {label}
    </Button>
  )
}
