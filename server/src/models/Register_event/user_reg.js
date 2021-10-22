const { myData } = require("../database/conn");
const config = require("../../config");


const getEvent = async (data) => {
  const sql = `SELECT * from event_tb inner join location_tb on event_tb.location_id = location_tb.location_id where event_tb.event_id = ${data.event_id}`;
  const result = await myData.query(sql);
  return result.rows;
};


module.exports = {
  getEvent
  };