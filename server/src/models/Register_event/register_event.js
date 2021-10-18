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
  const sql = `UPDATE event_tb
	SET event_id=${data.event_id}, location_id=${data.location_id}, event_name='${data.event_name}', event_status='${data.event_status}', event_descr='${data.event_descr}', event_start='${data.event_start}', event_end='${data.event_end}'WHERE event_id=${data.event_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteEvent = async (data) => {
  const sql = `DELETE FROM event_tb
	WHERE event_id=${data};`;
  const result = await myData.query(sql);
  return result.rows;
};

const getLocation = async () => {
  const sql = "SELECT * from location_tb ORDER BY location_id ASC";
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
  insertFaculty,
  updateEvent,
  deleteEvent,
  addEvent,
  getLocation
};
