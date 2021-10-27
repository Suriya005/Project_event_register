const { myData } = require("../database/conn");
const config = require("../../config");

const getEvent = async (data) => {
  const sql = `SELECT * from event_register_tb inner join location_tb on event_tb.location_id = location_tb.location_id where event_tb.event_id = ${data.event_id}`;
  const result = await myData.query(sql);
  return result.rows;
};

const userRegisterEvent = async (data) => {
  console.log("data-->", data);
  const sql = `INSERT INTO event_register_tb(event_id, user_id, status_event, image_event, reg_time) VALUES (${data.event_id}, '${data.user_id}', 'A', '${data.image_event}', now());`;
  await myData.query(sql);
  return { msg: "insert success" };
};

const userGetQuestionById = async (data) => {
  console.log("data-->", data);
  const sql = `SELECT * from question_tb where event_id = ${data}`;
  const result = await myData.query(sql);
  return result.rows;
};

const addAnswer = async (data) => {
  console.log("data-->", data);
  const sql = `INSERT INTO public.answer_tb( question_id, user_id, answer, feedback, answer_status, answer_time) VALUES (${data.question_id}, '${data.user_id}', ARRAY['${data.answer.join("','")}'], '${data.feedback}', 'A', now());`;
  const result = await myData.query(sql);
  return result.rows;
};

const checkRegisterEvent = async (data) => {
  try {
    console.log("data-->", data);
    const sql = `SELECT status_event FROM event_register_tb where event_id=${data.event_id} and  user_id='${data.user_id}';`;
    const result = await myData.query(sql);
    console.log(result.rows);
    if (result.rows[0].status_event == "A") {
      return { eventStatus: false };
    } else {
      return { eventStatus: true };
    }
  } catch (error) {
    return { eventStatus: true };
  }
};

const checkAnswer = async (data) => {
  try {
    console.log("data-->", data);
    const sql = `SELECT answer_status FROM answer_tb where question_id=${data.question_id} and  user_id='${data.user_id}';`;
    const result = await myData.query(sql);
    console.log(result.rows[0].answer_status);
    if (result.rows[0].answer_status == "A") {
      return { eventStatus: true };
    } else {
      return { eventStatus: false };
    }
  } catch (error) {
    return { eventStatus: false };
  }
};

module.exports = {
  getEvent,
  userRegisterEvent,
  userGetQuestionById,
  addAnswer,
  checkRegisterEvent,
  checkAnswer,
};
