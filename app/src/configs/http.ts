export const http = async <T>(url: RequestInfo, config?: RequestInit): Promise<T> => {
    try {
      const response = await fetch(url, config)
  
      return response.json()
    } catch (error) {
      throw new Error()
    }
  }
  