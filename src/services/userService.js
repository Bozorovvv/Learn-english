import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/users";

export function register(name, username, password) {
  return http.post(apiEndpoint, {
    name: name,
    email: username,
    password: password,
  });
}

export default async function getUser() {
  const jwt = localStorage.getItem("token");
  const user = await jwtDecode(jwt);
  const userId = user.id;
  return http.get(apiEndpoint + "/" + userId);
}

export async function getUserId() {
  const response = await getUser();
  return response.data.id;
}
