import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndpoint = apiUrl + '/Users/post_users'

export function register(user) {
  return http.post(apiEndpoint, {
    name: user.name,
    email: user.username,
    password: user.password,
  })
}
