import styled from 'styled-components'
import { Props } from './interfaces'

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${ ({ isIcon }) =>  isIcon ? '100%' : '38px' };
  width: ${ ({ isIcon }) =>  isIcon ? '100%' : '100px' };
  background-color: ${ ({ background }) =>  background };
  border-radius: ${ ({ isIcon }) =>  isIcon ? '50%' : '8px'};
  cursor: pointer;
  color: ${ ({ color }) => color };  
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #c8c8c8;
  display: flex;
  :hover {
    box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.35);
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
