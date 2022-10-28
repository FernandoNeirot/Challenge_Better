import { ReactElement } from 'react'

export interface Props {
  columns: Column[]
  data: any[]
  loading?: boolean
}

export interface Column {
  id: string
  name: string
  selector(row: any): string | number
  minWidth?: string
  width?: string
  sortable: boolean
  cell?(row: any): ReactElement<unknown, any> | string
}
