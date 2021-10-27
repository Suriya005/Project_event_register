const { myData } = require("../database/conn");
const config = require("../../config");


const getEvent = async (data) => {
  const sql = `SELECT * from event_register_tb inner join location_tb on event_tb.location_id = location_tb.location_id where event_tb.event_id = ${data.event_id}`;
  const result = await myData.query(sql);
  return result.rows;
};

const userRegisterEvent = async (data) => {
  console.log('data-->', data)
  const sql = `INSERT INTO event_register_tb(event_id, user_id, status_event, image_event, reg_time) VALUES (${data.event_id}, '${data.user_id}', 'A', '${data.image_event}', now());`
  await myData.query(sql);
  return { msg: "insert success" };
};

const userGetQuestionById = async (data) => {
  console.log('data-->', data)
  const sql = `SELECT * from question_tb where event_id = ${data}`;
  const result = await myData.query(sql);
  return result.rows;
};


module.exports = {
  getEvent,
  userRegisterEvent,
  userGetQuestionById
  };