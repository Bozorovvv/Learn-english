import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/words";

export function getWords() {
  return http.get(apiEndpoint);
}

export function getUserWords(userId) {
  const token = localStorage.getItem("token");
  return http.get(`${apiUrl}/users/${userId}/words`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createUserWord(userId, wordId, difficulty) {
  const token = localStorage.getItem("token");
  http
    .post(
      `https://react-learnwords-example.herokuapp.com/users/${userId}/words/${wordId}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          difficulty: difficulty,
          optional: {},
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err, err.response));
}

const userId = "6191f458fb20bf001533a159";
const wordId = "5e9f5ee35eb9e72bc21af4a3";
const word = "easy";

createUserWord(userId, wordId, word);
