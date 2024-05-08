import { $host } from "./index";

export const fetchGrades = async (GroupID, ItemID, MonthID) => {
  const { data } = await $host.get("api/grades", {
    params: {
      GroupID,
      ItemID,
      MonthID,
    },
  });
  return data;
};

export const createGrades = async (grades) => {
  const { data } = await $host.post("api/grades", grades);
  return data;
};
