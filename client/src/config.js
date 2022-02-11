import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://ict-blogapp.herokuapp.com/api/"
  
})