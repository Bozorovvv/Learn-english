import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/signin";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const response = await http.post(apiEndpoint, { email, password });
  const token = response.data.token;
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getJwt,
};
