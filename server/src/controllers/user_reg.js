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

  const addAnswer = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.addAnswer(body);
    res.send(result);
  }

  const checkRegisterEvent = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.checkRegisterEvent(body);
    res.send(result);
  }

  const checkAnswer = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.checkAnswer(body);
    res.send(result);
  }

  const getUserById = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.getUserById(body);
    res.send(result);
  }

  const checkRegisterByUser = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.checkRegisterByUser(body);
    res.send(result);
  }

  const checkAnswerByUser = async (req, res) => {
    const { body } = req;
    const result = await userRegModel.checkAnswerByUser(body);
    res.send(result);
  }

  

  

  

module.exports = {
    getEventById,
    userRegisterEvent,
    userGetQuestionById,
    addAnswer,
    checkRegisterEvent,
    checkAnswer,
    getUserById,
    checkRegisterByUser,
    checkAnswerByUser

}