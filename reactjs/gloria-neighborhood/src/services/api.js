import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
  });

const getUser = (id) => api.get(`/api/users/${id}`)
const searchUser = (q) => api.get(`/api/users?q=${q}`)

export default { getUser, searchUser } 