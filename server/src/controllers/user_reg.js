const userRegModel = require("../models/Register_event/user_reg");

const getEventById = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.getEvent(body);
    res.send(result);
  };

module.exports = {
    getEventById

}