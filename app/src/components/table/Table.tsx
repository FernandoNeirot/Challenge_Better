import React from 'react'
import DataTable from 'react-data-table-component'
import { Props } from './interfaces'
import { Container } from './Table.styled'

export const Table: React.FC<Props> = ({
  columns = [],
  data = [],
  loading
}) => (
  <Container>
    <DataTable
      columns={columns}
      data={data}
      pagination
      dense
      progressPending={loading}
    />
  </Container>
)
