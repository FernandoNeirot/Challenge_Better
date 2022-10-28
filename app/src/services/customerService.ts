import { http } from "../configs/http"
import { ACTION } from "../constants/constants"
import { ICustomer } from "../interfaces/ICustomer"
import { getRowsSaved } from "../utils/localStorage"


const URL = process.env.REACT_APP_URL

export const customerService = { 
  getData: () => async (): Promise<ICustomer[]> => {
    try {
      let response = await http<ICustomer[]>(`${URL}`)
      const rowsSaved = getRowsSaved()

      response = response.filter(item => !rowsSaved.some(row => row.id === item.id && row.action === ACTION.DELETE.value))
      response = response.map(item => {
        if(rowsSaved.some(row => row.id === item.id && row.action === ACTION.EDIT.value)){
          const row = rowsSaved.find(row => row.id === item.id)
          if(row)
            item = row
        }
        return item
      })
      console.log(ACTION.ADD.value)
      console.log(rowsSaved)
      for( let item of rowsSaved.filter(element => element.action === ACTION.ADD.value)){
        response.push(item)
      }
       

      return response

    } catch (error) {
      throw new Error()
    }
  },
}