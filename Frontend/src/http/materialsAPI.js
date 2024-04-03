import { $host } from "./index";

export const createMaterials = async (material) => {
  const { data } = await $host.post("api/Materials", material);
  return data;
};

export const fetchMaterials = async (GroupID, ItemID, MonthID) => {
  const { data } = await $host.get("api/Materials", {
    params: {
      GroupID,
      ItemID,
      MonthID,
    },
  });
  return data;
};

export const fetchGroup = async () => {
  const { data } = await $host.get("api/GroupStudents");
  return data;
};
