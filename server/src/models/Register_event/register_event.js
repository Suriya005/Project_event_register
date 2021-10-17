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

const getEventList = async () => {
  const sql = "SELECT * FROM event_tb";
  const result = await myData.query(sql);
  return result.rows;
};

const getMajor = async () => {
  const sql = "SELECT * FROM major_tb";
  const result = await myData.query(sql);
  return result.rows;
};

const getFaculty = async () => {
  const sql = "SELECT * FROM faculty_tb";
  const result = await myData.query(sql);
  return result.rows;
};

const insertFaculty = async (doc = {}) => {
  const insertDoc = { ...doc };
  await myData.query(
    `INSERT INTO public.faculty_tb(
      faculty_id, faculty_name)
      VALUES (default, '${insertDoc.facultyName}');`
  );
  return { msg: "insert success" };
};

module.exports = {
  insertRegisterEvent,
  getEventList,
  getMajor,
  getFaculty,
  insertFaculty
};
