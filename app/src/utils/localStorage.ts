import { ACTION } from "../constants/constants";
import { ICustomer } from "../interfaces/ICustomer";

export const setRowToPersistence = (action: string, newRow?: ICustomer, key = 'customers') => {
  let dataLocalStorage = localStorage.getItem(key) ?? ''
  let data: ICustomer[]=[]
  if(dataLocalStorage){
    data = JSON.parse(dataLocalStorage)
    switch(action){
      case ACTION.DELETE.value:
        if(data.some(item => item.id === newRow?.id)){
            data = data.map(item => {
                if(newRow?.id === item.id){
                    newRow.action = ACTION.DELETE.value
                  return newRow
                }
                return item
            })
          }else if(newRow){
            data.push(newRow)
          }
          
          break; 
      case ACTION.EDIT.value:
        if(data.some(item => item.id === newRow?.id)){
          data = data.map(item => {
              if(newRow?.id === item.id){
                newRow.action = ACTION.EDIT.value  
                return newRow
              }                
              return item
          })
        }else if(newRow){
          newRow.action = ACTION.EDIT.value  
          data.push(newRow)
        }
        
        break;  
    }    
    localStorage.setItem(key,JSON.stringify(data))
  }
  else {
    localStorage.setItem(key,JSON.stringify([newRow]))
  }
}

export const getRowsSaved = (key = 'customers') => {
  let dataLocalStorage = localStorage.getItem(key) ?? ''
  let data: ICustomer[]=[]
  
  if(dataLocalStorage)
      data = JSON.parse(dataLocalStorage)

  return data
}