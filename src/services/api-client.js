import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3ed92c68725a419998140fb0bf99f728',
  },
})
