const RegisterEventModels = require("../models/Register_event/register_event");

const getEventList = async (req, res) => {
  const result = await RegisterEventModels.getEventList();
  res.send(result);
};

const addEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.addEvent(body);
  res.send(result);
};

const updateEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateEvent(body);
  res.send(result);
};

const deleteEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteEvent(body);
  res.send(result);
};

const getLocation = async (req, res) => {
  const result = await RegisterEventModels.getLocation();
  res.send(result);
};

const getMajor = async (req, res) => {
  const result = await RegisterEventModels.getMajor();
  res.send(result);
};
const getFaculty = async (req, res) => {
  const result = await RegisterEventModels.getFaculty();
  res.send(result);
};

const postFaculty = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.insertFaculty(body);
  res.send(result);
};

const InsertRegisterEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.insertRegisterEvent(body);
  res.send(result);
};

module.exports = {
  InsertRegisterEvent,
  getEventList,
  getMajor,
  getFaculty,
  postFaculty,
  updateEvent,
  deleteEvent,
  addEvent,
  getLocation
};
