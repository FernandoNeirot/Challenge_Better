import React from 'react'

import { Container, Label, Input } from './InputCustom.styled'
import { Props } from './interfaces'

export const InputCustom: React.FC<Props> = ({
  type = 'text',
  placeholder = '',
  label,
  value,
  setValue,
}) => {

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: { target: { value: string } }) => setValue ? setValue(e.target.value) : ()=>{}}
      />
    </Container>
  )
}
