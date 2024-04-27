import { $host } from "./index";

export const createTopics = async (topic) => {
  const { data } = await $host.post("api/topic", topic);
  return data;
};

export const fetchTopic = async (GroupID, ItemID, MonthID) => {
  const { data } = await $host.get("api/topic", {
    params: {
      GroupID,
      ItemID,
      MonthID,
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
