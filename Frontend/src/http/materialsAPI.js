import { $host } from "./index";

export const createMaterials = async (material) => {
  const { data } = await $host.post("api/materials", material);
  return data;
};

export const fetchMaterials = async (GroupID, ItemID, MonthID) => {
  const { data } = await $host.get("api/materials", {
    params: {
      GroupID,
      ItemID,
      MonthID,
    },
  });
  return data;
};

export const deleteMaterial = async (MaterialID) => {
  await $host.delete(`api/materials/` + MaterialID);
};
