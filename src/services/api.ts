import axios from 'axios'

// const { TOKEN } = process.env;
const TOKEN = ''

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }
})

export default api;