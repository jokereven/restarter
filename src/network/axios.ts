import originalAxios from 'axios'

export const axios = originalAxios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 4000,
})
