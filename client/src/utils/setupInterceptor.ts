import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API || 'http://localhost:8080/api',
})

export default http
