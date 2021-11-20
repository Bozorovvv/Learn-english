import http from './httpService'
import { apiUrl } from '../config.json'
import { getUserId } from './userService'

const apiEndpoint = apiUrl + '/words'

export function getWords() {
  return http.get(apiEndpoint)
}
export function getWordById(id) {
  return http.get(`${apiEndpoint}/${id}`)
}

export function getUserWords(userId) {
  return http.get(`${apiUrl}/users/${userId}/words`)
}

export async function createUserWord(userId, wordId, difficulty) {
  http
    .post(
      `https://react-learnwords-example.herokuapp.com/users/${userId}/words/${wordId}`,
      {
        difficulty: difficulty,
        optional: {},
      }
    )
    .then((res) => {
      console.log('Pravilniy otvet')
    })
    .catch((err) => console.log(err.response.data))
}

export async function getLearnedUserWords() {
  const userId = await getUserId()
  return getUserWords(userId)
}
