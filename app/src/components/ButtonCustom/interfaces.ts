import { ReactElement } from 'react'

export interface Props {
  onClick(value?: unknown): void
  label?: string
  background?: string
  color?: string
  disabled?: boolean
  icon?: ReactElement
  isSmall?: boolean
  fullWidth?: boolean
  width?: string
  marginLeft?: boolean
  marginTop?: boolean
}
