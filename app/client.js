import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

const token = localStorage.getItem('token')

axiosInstance.defaults.headers.common['X-Authentication-Token'] = token
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

export default axiosInstance
