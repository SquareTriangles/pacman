import axios, { AxiosResponse } from 'axios'

const API_URL = 'http://192.168.31.20:3000'

export type ApiResponse<T = unknown> = AxiosResponse<T>

export const forumApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})
