const userRegModel = require("../models/Register_event/user_reg");

const getEventById = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.getEvent(body);
    res.send(result);
  };

  const userRegisterEvent = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.userRegisterEvent(body);
    res.send(result);
  }; 

  const userGetQuestionById = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.userGetQuestionById(body);
    res.send(result);
  }

module.exports = {
    getEventById,
    userRegisterEvent,
    userGetQuestionById

}