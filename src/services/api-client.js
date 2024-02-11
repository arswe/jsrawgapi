import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3ed92c68725a419998140fb0bf99f728',
  },
})

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  getAll(config) {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data)
  }
}

export default APIClient
