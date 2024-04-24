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

export const fetchStudents = async (GroupID) => {
  const { data } = await $host.get("api/students", {
    params: {
      GroupID,
    },
  });
  return data;
};

export const fetchGroup = async () => {
  const { data } = await $host.get("api/group");
  return data;
};

export const fetchItem = async () => {
  const { data } = await $host.get("api/item");
  return data;
};

export const fetchMonth = async () => {
  const { data } = await $host.get("api/month");
  return data;
};

export const createGrades = async (grades) => {
  const { data } = await $host.post("api/grades", grades);
  return data;
};
