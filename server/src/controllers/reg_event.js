const RegisterEventModels = require("../models/Register_event/register_event");

// Event
const getEventList = async (req, res) => {
  const result = await RegisterEventModels.getEventList();
  res.send(result);
};

const getEventListAdmin = async (req, res) => {
  const result = await RegisterEventModels.getEventListAdmin();
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

// Faculty
const getFaculty = async (req, res) => {
  const result = await RegisterEventModels.getFaculty();
  res.send(result);
};

const postFaculty = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.postFaculty(body);
  res.send(result);
};

const updateFaculty = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateFaculty(body);
  res.send(result);
};

const deleteFaculty = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteFaculty(body);
  res.send(result);
};

// Major
const getMajor = async (req, res) => {
  const result = await RegisterEventModels.getMajor();
  res.send(result);
};

const postMajor = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.postMajor(body);
  res.send(result);
};

const updateMajor = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateMajor(body);
  res.send(result);
};

const deleteMajor = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteMajor(body);
  res.send(result);
};

// Location
const getLocation = async (req, res) => {
  const result = await RegisterEventModels.getLocation();
  res.send(result);
};

const postLocation = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.postLocation(body);
  res.send(result);
};

const updateLocation = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateLocation(body);
  res.send(result);
};

const deleteLocation = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteLocation(body);
  res.send(result);
};

// Question
const getQuestion = async (req, res) => {
  const result = await RegisterEventModels.getQuestion();
  res.send(result);
};

const postQuestion = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.postQuestion(body);
  res.send(result);
};

const updateQuestion = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateQuestion(body);
  res.send(result);
};

const deleteQuestion = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteQuestion(body);
  res.send(result);
};

// Answer
const getAnswer = async (req, res) => {
  const result = await RegisterEventModels.getAnswer();
  res.send(result);
};

const postAnswer = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.postAnswer(body);
  res.send(result);
};

const updateAnswer = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateAnswer(body);
  res.send(result);
};

const deleteAnswer = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteAnswer(body);
  res.send(result);
};

// Reg_event
const getRegEvent = async (req, res) => {
  const result = await RegisterEventModels.getRegEvent();
  res.send(result);
};

const postRegEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.postRegEvent(body);
  res.send(result);
};

const updateRegEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.updateRegEvent(body);
  res.send(result);
};

const deleteRegEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.deleteRegEvent(body);
  res.send(result);
};


const InsertRegisterEvent = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.insertRegisterEvent(body);
  res.send(result);
};

// Report
const eventReport = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.eventReport(body);
  res.send(result);
};

const answerReport = async (req, res) => {
  const { body } = req;
  const result = await RegisterEventModels.answerReport(body);
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
  updateFaculty,
  deleteFaculty,
  postMajor,
  updateMajor,
  deleteMajor,
  getLocation,
  postLocation,
  updateLocation,
  deleteLocation,
  getQuestion,
  postQuestion,
  updateQuestion,
  deleteQuestion,
  getAnswer,
  postAnswer,
  updateAnswer,
  deleteAnswer,
  getRegEvent,
  postRegEvent,
  updateRegEvent,
  deleteRegEvent,
  getEventListAdmin,
  eventReport,
  answerReport
};
