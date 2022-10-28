import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-right: 15px;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0px 0px 0px;
  }
`

export const Label = styled.div`
  width: 100%;
  margin-bottom: 8px;
  font-weight: bold;
`

export const Input = styled.input`
  width: calc(100% - 25px);
  border: 2px solid #e0dfdf;
  height: 15px;
  border-radius: 5px;
  padding: 10px;
  :hover{
    border: 2px solid #cccccc;
  }
  :focus {
    border: 2px solid #2684FF;
    outline: none;
  }
`