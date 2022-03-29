import axios from 'axios'

// const { TOKEN } = process.env;
const TOKEN = 'BQANMvvIxTx5_Uha4wV48SN2C6gtwQXK7JvR1CSNAc2XYhcmwd9B82qBV06NIPbJBCvnJJMhsJ22pMpFwXUH7zCcDr03YiHpcoO4ezlJ2PeVWoUqIl5QDBj0Z16Jp3I4VzlAMAyvWbuPHJwQ-RS7PRSrRDtdETHhh0fv9oc'
const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }
})

export default api;