const { myData } = require("../database/conn");
const config = require("../../config");

const insertRegisterEvent = async (doc = {}) => {
  const insertDoc = { ...doc };
  const time = new Date().toISOString();
  await myData.query(
    `INSERT INTO public.event_register_tb(
        event_id, user_id, status_event, image_event, reg_time)
        VALUES (${insertDoc.event_id}, '${insertDoc.user_id}', '${insertDoc.status_event}', '${insertDoc.image_event}', '${time}');`
  );
  return { msg: "insert success" };
};

// Event
const getEventList = async () => {
  const sql = "SELECT * from event_tb inner join location_tb on event_tb.location_id = location_tb.location_id ORDER BY event_id ASC";
  const result = await myData.query(sql);
  return result.rows;
};

const addEvent = async (data) => {
  const sql = `INSERT INTO event_tb (event_id, location_id, event_name, event_status, event_descr, event_start, event_end) VALUES (default, ${data.location_id}, '${data.event_name}', '${data.event_status}', '${data.event_descr}', '${data.event_start}', '${data.event_end}');`;
  const result = await myData.query(sql);
  return result.rows;
};

const updateEvent = async (data) => {
  const sql = `UPDATE event_tb SET location_id=${data.location_id}, event_name='${data.event_name}', event_status='${data.event_status}', event_descr='${data.event_descr}', event_start='${data.event_start}', event_end='${data.event_end}'WHERE event_id=${data.event_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteEvent = async (data) => {
  const sql = `DELETE FROM event_tb
	WHERE event_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

// Faculty
const getFaculty = async () => {
  const sql = "SELECT * FROM faculty_tb ORDER BY faculty_id ASC";
  const result = await myData.query(sql);
  return result.rows;
};

const postFaculty = async (data) => {
  const sql = `INSERT INTO faculty_tb(faculty_id, faculty_name) VALUES (default, '${data.faculty_name}');`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateFaculty = async (data) => {
  console.log('model -->',data)
  const sql = `UPDATE faculty_tb SET faculty_id=${data.faculty_id}, faculty_name='${data.faculty_name}' WHERE faculty_id=${data.faculty_old_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteFaculty = async (data) => {
  const sql = `DELETE FROM faculty_tb
	WHERE faculty_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

// Major
const getMajor = async () => {
  const sql = "SELECT * FROM major_tb inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id ORDER BY major_id ASC";
  const result = await myData.query(sql);
  return result.rows;
};

const postMajor = async (data) => {
  console.log("models--->",data);
  const sql = `INSERT INTO major_tb(major_id, major_name, faculty_id) VALUES (default, '${data.major_name}', ${data.faculty_id});`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateMajor = async (data) => {
  console.log('model -->',data)
  const sql = `UPDATE major_tb SET major_id=${data.major_id}, major_name='${data.major_name}', faculty_id=${data.faculty_id} WHERE major_id=${data.major_old_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteMajor = async (data) => {
  const sql = `DELETE FROM major_tb
	WHERE major_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

// Location
const getLocation = async () => {
  const sql = "SELECT * from location_tb ORDER BY location_id ASC";
  const result = await myData.query(sql);
  return result.rows;
};

const postLocation = async (data) => {
  console.log('----->',data);
  const sql = `INSERT INTO location_tb(location_id, location_name, latitude, longitude) VALUES (default, '${data.location_name}', ${data.latitude}, ${data.longitude});`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateLocation = async (data) => {
  console.log('model -->',data)
  const sql = `UPDATE location_tb SET location_id=${data.location_id}, location_name='${data.location_name}', latitude='${data.latitude}', longitude='${data.longitude}' WHERE location_id=${data.location_old_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteLocation = async (data) => {
  const sql = `DELETE FROM location_tb
	WHERE location_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

// Question
const getQuestion = async () => {
  const sql = "SELECT * FROM question_tb inner join event_tb on event_tb.event_id = question_tb.event_id ORDER BY question_id ASC";
  const result = await myData.query(sql);
  console.log(result.rows)
  return result.rows;
};

const postQuestion = async (data) => {
  const sql = `INSERT INTO question_tb(question_id, event_id, question_status, question_start, question_end, question) VALUES (default, ${data.event_id}, '${data.question_status}', '${data.question_start}', '${data.question_end}', ARRAY['${data.question.join("','")}']);`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateQuestion = async (data) => {
  console.log('model -->',data)
  const sql = `UPDATE question_tb SET question_id=${data.question_id}, event_id=${data.event_id}, question_status='${data.question_status}', question_start='${data.question_start}', question_end='${data.question_end}', question= ARRAY['${data.question.join("','")}'] WHERE question_id=${data.question_old_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteQuestion = async (data) => {
  const sql = `DELETE FROM question_tb
	WHERE question_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

// Answer
const getAnswer = async () => {
  const sql = "SELECT * FROM major_tb ORDER BY major_id ASC";
  const result = await myData.query(sql);
  return result.rows;
};

const postAnswer = async (data) => {
  const sql = `INSERT INTO major_tb(major_id, major_name) VALUES (default, '${data.major_name}');`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateAnswer = async (data) => {
  console.log('model -->',data)
  const sql = `UPDATE major_tb SET major_id=${data.major_id}, major_name='${data.major_name}' WHERE major_id=${data.major_old_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteAnswer = async (data) => {
  const sql = `DELETE FROM major_tb
	WHERE major_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

// Reg_event
const getRegEvent = async () => {
  const sql = `SELECT event_register_tb.event_id, event_register_tb.user_id, event_register_tb.status_event, encode(event_register_tb.image_event, 'escape') as image_event, event_register_tb.reg_time, event_tb.event_name  from ((event_register_tb inner join users_tb on event_register_tb.user_id = users_tb.user_id) inner join event_tb on event_register_tb.event_id = event_tb.event_id)`;
  const result = await myData.query(sql);
  return result.rows;
};

const postRegEvent = async (data) => {
  const sql = `INSERT INTO event_register_tb(event_id, user_id, status_event, image_event, reg_time) VALUES (${data.event_id}, '${data.user_id}', '${data.status_event}', '${data.image_event}', '${data.reg_time}');`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateRegEvent = async (data) => {
  console.log('model -->',data)
  const sql = `UPDATE event_register_tb SET user_id='${data.user_id}', event_id=${data.event_id}, status_event='${data.status_event}', image_event='${data.image_event}', reg_time='${data.reg_time}'  WHERE user_id='${data.old_user_id}' and event_id=${data.event_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteRegEvent = async (data) => {
  console.log('data-->',data.event_id)
  const sql = `DELETE FROM event_register_tb
	WHERE event_id=${data.event_id} and user_id='${data.user_id}';`;
  const result = await myData.query(sql);
  return result.rows;
};







module.exports = {
  insertRegisterEvent,
  getEventList,
  getMajor,
  getFaculty,
  postFaculty,
  updateEvent,
  deleteEvent,
  addEvent,
  getLocation,
  updateFaculty,
  deleteFaculty,
  postMajor,
  updateMajor,
  deleteMajor,
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
  deleteRegEvent
};
