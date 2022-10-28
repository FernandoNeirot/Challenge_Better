import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ConstainerButtons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
`

export const ContainerEdit = styled.div`
  background-color: #cdffc6;
  padding: 2.5%;
  width: 95%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const IconAdd = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  right: 2%;
  top: 10px;
  border-radius: 50%;
  z-index: 999999;
  svg {
    width: 100%;
    height: 100%;
  }
`