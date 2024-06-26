const { TopicLessons } = require("../Models/models");
const ApiError = require("../Error/ApiError");

class TopicController {
  async create(req, res, next) {
    try {
      const { TextTopic, HomeTopic, ItemID, GroupID, Data, MonthID } = req.body;

      const topics = await TopicLessons.create({
        TextTopic,
        HomeTopic,
        ItemID,
        GroupID,
        Data,
        MonthID,
      });

      return res.json(topics);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { GroupID = 1, ItemID = 1, MonthID = 1 } = req.query;
    let topics;
    topics = await TopicLessons.findAll({
      where: {
        GroupID: GroupID,
        ItemID: ItemID,
        MonthID: MonthID,
      },
    });
    return res.json(topics);
  }
}

module.exports = new TopicController();
