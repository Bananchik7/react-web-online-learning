import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (LoginAccount, PasswordAccount) => {
  const { data } = await $host.post("api/user/registration", {
    LoginAccount,
    PasswordAccount,
    LastName,
    FirstName,
    SurName,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export async function login(email, password) {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
}

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
