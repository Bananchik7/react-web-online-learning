import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (
  LoginAccount,
  PasswordAccount,
  LastName,
  FirstName,
  SurName
) => {
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

export async function login(LoginAccount, PasswordAccount) {
  const { data } = await $host.post("api/user/login", {
    LoginAccount,
    PasswordAccount,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
}

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
