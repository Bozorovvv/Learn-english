import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndpoint = apiUrl + '/words'

function wordUrl(id) {
  return `${apiEndpoint}/${id}`
}

export function getWords() {
  return http.get(apiEndpoint)
}
export function getWord(wordId) {
  return http.get(wordUrl(wordId))
}
