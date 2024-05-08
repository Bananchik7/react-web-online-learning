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
