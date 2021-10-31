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
    console.log(result.rowCount);
    if (result.rowCount > 0) {
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
    console.log(result.rowCount);
    if (result.rowCount > 0) {
      return { eventStatus: true };
    } else {
      return { eventStatus: false };
    }
  } catch (error) {
    return { eventStatus: false };
  }
};

const getUserById = async (data) => {
  console.log("data-->", data);
  const sql = `SELECT * FROM (users_tb inner join major_tb on users_tb.major_id = users_tb.major_id inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id) where user_id='${data}'`;
  const result = await myData.query(sql);
  return result.rows[0];
}

const checkRegisterByUser = async (data) => {
  console.log("data-->", data);
  const sql = `SELECT * FROM (event_register_tb inner join event_tb on event_tb.event_id = event_register_tb.event_id) where user_id = '${data}' order by event_tb.event_id`
  const result = await myData.query(sql);
  return result.rows;
}

const checkAnswerByUser = async (data) => {
  console.log("data-->", data);
  const sql = `SELECT * FROM (answer_tb inner join question_tb on answer_tb.question_id = question_tb.question_id inner join event_tb on question_tb.event_id = event_tb.event_id) where answer_tb.user_id = '${data}' order by event_tb.event_id`
  const result = await myData.query(sql);
  return result.rows;
}



module.exports = {
  getEvent,
  userRegisterEvent,
  userGetQuestionById,
  addAnswer,
  checkRegisterEvent,
  checkAnswer,
  getUserById,
  checkRegisterByUser,
  checkAnswerByUser
};
