import http from "./httpService";
import { apiUrl } from "../config.json";
import { getUserId } from "./userService";

const apiEndpoint = apiUrl + "/words";

export function getWords() {
  return http.get(apiEndpoint);
}
export function getWordById(id) {
  return http.get(`${apiEndpoint}/${id}`);
}

export function getUserWords(userId) {
  return http.get(`${apiUrl}/users/${userId}/words`);
}

export async function createUserWord(userId, wordId, difficulty) {
  http
    .post(`${apiUrl}/users/${userId}/words/${wordId}`, {
      difficulty: difficulty,
      optional: {},
    })
    .then((res) => {
      console.log("Pravilniy otvet");
    })
    .catch((err) => console.log(err.response.data));
}

export async function getLearnedUserWords() {
  const userId = await getUserId();
  return getUserWords(userId);
}

export function getUserStatistics(userId) {
  return http.get(`${apiUrl}/users/${userId}/statistics`);
}

export async function createUserStatistics(
  userId,
  learnedWords,
  data,
  newLearnedWords
) {
  http
    .put(`${apiUrl}/users/${userId}/statistics`, {
      learnedWords: learnedWords + newLearnedWords,
      optional: { ...{ data: data, newLearnedWords: newLearnedWords } },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err.response.data));
}

// createUserStatistics("6191f458fb20bf001533a159", 30, new Date(), 10);
