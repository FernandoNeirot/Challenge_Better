import styled from 'styled-components'
import { Props } from './interfaces'

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  background-color: ${ ({ background }) =>  background };
  cursor: pointer;
  color: ${ ({ color }) => color };  
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
  display: flex;
  :hover {
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.15);
  }
  :active {
    background-color: ${ ({ background }) => background };
  }
`

export const Icon = styled.div`
  margin: 5px;
  svg {
    font-size: 18px;
  }
`
