import { $host } from "./index";

export const createHelp = async (help) => {
  const { data } = await $host.post("api/Help", help);
  return data;
};
