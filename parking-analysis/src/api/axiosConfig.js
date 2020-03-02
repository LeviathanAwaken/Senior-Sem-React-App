import axios from 'axios'

const defaultURL = 'http://83907946.ngrok.io/api'

const instance = axios.create({
  baseURL: defaultURL
})

export default instance