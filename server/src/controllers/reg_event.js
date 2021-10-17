const RegisterEventModels = require("../models/Register_event/register_event");

const InsertRegisterEvent = async (req, res) => {
    const { body } = req;
    const result = await RegisterEventModels.insertRegisterEvent(body);
    res.send(result);
  };

  const getEventList = async (req, res) => {
    const result = await RegisterEventModels.getEventList();
    console.log(result);
    res.send(result);
  }

  const getMajor = async (req, res) => {
    const result = await RegisterEventModels.getMajor();
    console.log(result);
    res.send(result);
  };
  const getFaculty = async (req, res) => {
    const result = await RegisterEventModels.getFaculty();
    console.log(result);
    res.send(result);
  };

  const postFaculty = async (req, res) => {
    const { body } = req;
    const result = await RegisterEventModels.insertFaculty(body);
    res.send(result);
  };

  module.exports ={
    InsertRegisterEvent,
    getEventList,
    getMajor,
    getFaculty,
    postFaculty
    
  }
  