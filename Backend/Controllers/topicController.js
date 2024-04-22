const { TopicLessons } = require("../Models/models");
const ApiError = require("../Error/ApiError");

class TopicController {
  async create(req, res, next) {
    try {
      const { TextTopic, HomeTopic, ItemID, GroupID, Data } = req.body;

      const topics = await TopicLessons.create({
        TextTopic,
        HomeTopic,
        ItemID,
        GroupID,
        Data,
      });

      return res.json(topics);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { GroupID = 1, ItemID = 1 } = req.query;
    let topics;
    topics = await TopicLessons.findAll({
      where: {
        GroupID: GroupID,
        ItemID: ItemID,
      },
    });
    return res.json(topics);
  }
}

module.exports = new TopicController();
