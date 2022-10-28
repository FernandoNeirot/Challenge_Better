import React, { useEffect, useState } from 'react'
import { ButtonCustom } from '../../components/ButtonCustom/ButtonCustom'
import { InputCustom } from '../../components/InputCustom/InputCustom'
import { Table } from '../../components/table/Table'
import { ToastCustom } from '../../components/ToastCustom/ToastCustom'
import { ACTION, RESPONSE_TYPE } from '../../constants/constants'
import { IAction } from '../../interfaces/IAction'
import { ICustomer } from '../../interfaces/ICustomer'
import { customerService } from '../../services/customerService'
import { setRowToPersistence } from '../../utils/localStorage'
import { columns } from './data'

import { Container, ContainerEdit } from './Home.styled'

export const Home = () => {
  const [data, setData] = useState<ICustomer[]>([])
  const [loading, setLoading] = useState<boolean>()
  const [action, setAction] = useState<IAction>(ACTION.HIDE)
  const [id, setId] = useState<number>()
  const [first, setFirst] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [country, setCountry] = useState<string>('')

  const getRow = (id: number | undefined) => data.find(item => item.id === id)

  const setNewData = (id: number | undefined) => {
    const row = getRow(id)
    setId(row?.id)
    setFirst(row?.first ?? '')
    setLast(row?.last ?? '')
    setEmail(row?.email ?? '')
    setCompany(row?.company ?? '')
    setCountry(row?.country ?? '')    
  }

  const handleClickEdit = (id: number) => {
    setNewData(id)
    setAction(ACTION.EDIT)
  }

  const handleClickDelete = (id: number) => {
    setNewData(id)
    setAction(ACTION.DELETE)    
  }

  const handleClickSaveRow = () => {
    const newData = data.map(item => {
      if(item.id === id){
        item.first=first
        item.last=last
        item.email=email
        item.company=company
        item.country=country
      }
      return item
    })
    setAction(ACTION.HIDE)
    setData(newData)   
    const row = getRow(id)
    setRowToPersistence(action.value, row)
    ToastCustom(RESPONSE_TYPE.SUCCESS, 'Registro guardado') 
  }

  const handleClickDeleteRow = () => {
    const newData = data.filter(item => item.id !== id)
    setAction(ACTION.HIDE)
    setData(newData)
    const row = getRow(id)
    setRowToPersistence(action.value, row)
    ToastCustom(RESPONSE_TYPE.SUCCESS, 'Registro eliminado') 
  }

  useEffect(() => {
    setLoading(true)
    customerService.getData()()
      .then(res => setData(res))
      .catch(err => ToastCustom(RESPONSE_TYPE.ERROR, 'Algo exploto =(') )
      .finally(() => setLoading(false))
      
  }, [])
  
  return(
  <Container>
    <Table
      data={data}
      columns={columns(handleClickEdit,handleClickDelete)}
      loading={loading}
    />
    {
      action !== ACTION.HIDE &&     
        <ContainerEdit>
          <InputCustom
            label='Id'
            value={id}
          />
          <InputCustom
            label='Nombre'
            value={first}
            setValue={action !== ACTION.DELETE ? setFirst : undefined}
          />
          <InputCustom
            label='Apellido'
            value={last}
            setValue={action !== ACTION.DELETE ? setLast : undefined}
          />
          <InputCustom
            label='Email'
            value={email}
            setValue={action !== ACTION.DELETE ? setEmail : undefined}
          />
          <InputCustom
            label='Company'
            value={company}
            setValue={action !== ACTION.DELETE ? setCompany : undefined}
          />
          <InputCustom
            label='Country'
            value={country}
            setValue={action !== ACTION.DELETE ? setCountry : undefined}
          />
          <ButtonCustom
            label={action?.value}
            onClick={() => action !== ACTION.DELETE ? handleClickSaveRow() : handleClickDeleteRow()}
            background={action?.background}
          />
        </ContainerEdit>    
    }
  </Container>
)}
