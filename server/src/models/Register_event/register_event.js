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
  const sql = `SELECT * from ((event_tb inner join location_tb on event_tb.location_id = location_tb.location_id) inner join question_tb on event_tb.event_id = question_tb.event_id) ORDER BY event_tb.event_id ASC`
  const result = await myData.query(sql);
  return result.rows;
};

const getEventListAdmin = async () => {
  const sql = `SELECT * from event_tb`
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
  console.log('model -->', data)
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
  console.log("models--->", data);
  const sql = `INSERT INTO major_tb(major_id, major_name, faculty_id) VALUES (default, '${data.major_name}', ${data.faculty_id});`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateMajor = async (data) => {
  console.log('model -->', data)
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
  console.log('----->', data);
  const sql = `INSERT INTO location_tb(location_id, location_name, latitude, longitude) VALUES (default, '${data.location_name}', ${data.latitude}, ${data.longitude});`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateLocation = async (data) => {
  console.log('model -->', data)
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

const getQuestionById = async (data) => {
  console.log('test question -->',data)
  const sql = `SELECT question_tb.question FROM question_tb inner join event_tb on event_tb.event_id = question_tb.event_id where event_tb.event_id = ${data}`
  const result = await myData.query(sql);
  console.log('test question -->',result.rows[0])
  return result.rows[0];
};

const postQuestion = async (data) => {
  const sql = `INSERT INTO question_tb(question_id, event_id, question_status, question_start, question_end, question) VALUES (default, ${data.event_id}, '${data.question_status}', '${data.question_start}', '${data.question_end}', ARRAY['${data.question.join("','")}']);`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateQuestion = async (data) => {
  console.log('model -->', data)
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
  const sql = `SELECT * FROM ((answer_tb inner join question_tb ON answer_tb.question_id = question_tb.question_id) inner join event_tb ON question_tb.event_id = event_tb.event_id) ORDER BY question_tb.question_id ASC`;
  const result = await myData.query(sql);
  return result.rows;
};

const postAnswer = async (data) => {
  console.log(data);
  const sql = `INSERT INTO public.answer_tb(question_id, user_id, feedback, answer_status, answer_time) VALUES (${data.question_id}, '${data.user_id}', '${data.feedback}', '${data.answer_status}', '${data.answer_time}');`
  await myData.query(sql);
  return { msg: "insert success" };
};

const updateAnswer = async (data) => {
  console.log('model -->', data)
  const sql = `UPDATE public.answer_tb SET question_id=${data.question_id}, user_id='${data.user_id}', answer=ARRAY['${data.answer.join("','")}'], feedback='${data.feedback}', answer_status='${data.answer_status}', answer_time='${data.answer_time}' WHERE question_id=${data.old_question_id} and user_id='${data.old_user_id}';`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteAnswer = async (data) => {
  console.log(data)
  const sql = `DELETE FROM answer_tb WHERE question_id=${data.question_id} and user_id='${data.user_id}'`;
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
  console.log('model -->', data)
  const sql = `UPDATE event_register_tb SET user_id='${data.user_id}', event_id=${data.event_id}, status_event='${data.status_event}', image_event='${data.image_event}', reg_time='${data.reg_time}'  WHERE user_id='${data.old_user_id}' and event_id=${data.event_id};`;
  const result = await myData.query(sql);
  return result.rows;
};

const deleteRegEvent = async (data) => {
  console.log('data-->', data.event_id)
  const sql = `DELETE FROM event_register_tb
	WHERE event_id=${data.event_id} and user_id='${data.user_id}';`;
  const result = await myData.query(sql);
  return result.rows;
};

// Report


const eventReport = async (data) => {
  console.log('data-dwdw->', data)
  let reportData = {}
  // ข้อมูลการลงทะเบียนของกิจกรรมที่เลือกไว้ทั้งหมด
  const sql = `SELECT * FROM (event_register_tb inner join event_tb on event_tb.event_id = event_register_tb.event_id) where event_tb.event_id = ${data}`;

  // จำนวนการลงทะเบียนของผู้ใช้ทั้งหมด
  const event_count = `SELECT count(status_event) FROM public.event_register_tb where event_id = ${data} and status_event = 'A';`
  const answer_count = `SELECT count(answer_tb.answer_status) FROM (answer_tb inner join question_tb on answer_tb.question_id = question_tb.question_id inner join event_tb on question_tb.event_id = event_tb.event_id) WHERE event_tb.event_id = ${data} and answer_tb.answer_status = 'A';`
  const sex_count = `SELECT count(users_tb.sex), users_tb.sex FROM (answer_tb inner join question_tb on answer_tb.question_id = question_tb.question_id inner join event_tb on question_tb.event_id = event_tb.event_id inner join users_tb on answer_tb.user_id = users_tb.user_id) WHERE event_tb.event_id = ${data} and answer_tb.answer_status = 'A' group by users_tb.sex`
  const major_count = `SELECT count(major_tb.major_name),major_tb.major_name
    FROM (answer_tb
       inner join question_tb on answer_tb.question_id = question_tb.question_id
        inner join event_tb on question_tb.event_id = event_tb.event_id
        inner join users_tb on answer_tb.user_id = users_tb.user_id
        inner join major_tb on users_tb.major_id = major_tb.major_id
        inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id
       ) where event_tb.event_id = ${data} GROUP BY major_tb.major_name ;`
  const faculty_count = `SELECT count(faculty_tb.faculty_name),faculty_tb.faculty_name
  FROM (answer_tb
     inner join question_tb on answer_tb.question_id = question_tb.question_id
      inner join event_tb on question_tb.event_id = event_tb.event_id
      inner join users_tb on answer_tb.user_id = users_tb.user_id
      inner join major_tb on users_tb.major_id = major_tb.major_id
      inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id
     ) where answer_tb.question_id = 14 GROUP BY faculty_tb.faculty_name`
  const question = `SELECT question FROM question_tb where event_id = ${data};`



  reportData.event_count = await myData.query(event_count).then(result => result.rows[0].count);
  reportData.answer_count = await myData.query(answer_count).then(result => result.rows[0].count);
  reportData.sex_count = await myData.query(sex_count).then(result => result.rows);
  reportData.major_count = await myData.query(major_count).then(result => result.rows);
  reportData.faculty_count = await myData.query(faculty_count).then(result => result.rows);
  reportData.question = await myData.query(question).then(result => result.rows[0].question);
  reportData.answerDataReply = []
  reportData.majorNameArray = [];
  reportData.majorCountArray = [];
  reportData.facultyNameArray = [];
    reportData.facultyCountArray = [];
    reportData.sexNameArray =[]
    reportData.sexCountArray =[]

  for (let i = 1; i <= reportData.question.length; i++) {
    let answerMemoryDefalut = ['0', '0', '0', '0', '0']
    let sql_answer1 = `SELECT count(answer_tb.answer[${i}]), answer_tb.answer[${i}]
    FROM (answer_tb 
    inner join question_tb on answer_tb.question_id = question_tb.question_id
       inner join event_tb on question_tb.event_id = event_tb.event_id
     )
        where event_tb.event_id = ${data} GROUP BY answer_tb.answer[${i}] ;`
    let countAnswer
    
    countAnswer = await myData.query(sql_answer1).then(result => result.rows);
    for (let i =1; i<= countAnswer.length; i++) {
      await answerMemoryDefalut.fill(countAnswer[i-1].count, countAnswer[i-1].answer-1, countAnswer[i-1].answer)
    }
     reportData.answerDataReply.push(answerMemoryDefalut)
  }

  for(let items of reportData.major_count){
    reportData.majorNameArray.push(items.major_name)
    reportData.majorCountArray.push(items.count)
  }

  for(let items of reportData.faculty_count){
    reportData.facultyNameArray.push(items.faculty_name)
    reportData.facultyCountArray.push(items.count)
  }

  for(let items of reportData.sex_count){
    reportData.sexNameArray.push(items.sex)
    reportData.sexCountArray.push(items.count)
  }




  console.log(reportData);

  return reportData
};



const answerReport = async (data) => {
  console.log('data-->', data)
  const sql = `SELECT * FROM (answer_tb inner join question_tb on answer_tb.question_id = question_tb.question_id inner join event_tb on question_tb.event_id = event_tb.event_id) where event_tb.event_id = ${data} order by event_tb.event_id`;

  // sql main
  const sql_main = `SELECT answer_tb.answer, users_tb.sex, event_tb.event_name, major_tb.major_name, faculty_tb.faculty_name
	FROM (answer_tb
		 inner join question_tb on answer_tb.question_id = question_tb.question_id
		  inner join event_tb on question_tb.event_id = event_tb.event_id
		  inner join users_tb on answer_tb.user_id = users_tb.user_id
		  inner join major_tb on users_tb.major_id = major_tb.major_id
		  inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id
		 ) where event_tb.event_id = 15 ;`

  // หาเพศ
  const sql_sex = `SELECT count(users_tb.sex),users_tb.sex
	FROM (answer_tb
		 inner join question_tb on answer_tb.question_id = question_tb.question_id
		  inner join event_tb on question_tb.event_id = event_tb.event_id
		  inner join users_tb on answer_tb.user_id = users_tb.user_id
		  inner join major_tb on users_tb.major_id = major_tb.major_id
		  inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id
		 ) where answer_tb.question_id = ${data} GROUP BY users_tb.sex ;`

  //  major
  const sql_major = `SELECT count(major_tb.major_name),major_tb.major_name
    FROM (answer_tb
       inner join question_tb on answer_tb.question_id = question_tb.question_id
        inner join event_tb on question_tb.event_id = event_tb.event_id
        inner join users_tb on answer_tb.user_id = users_tb.user_id
        inner join major_tb on users_tb.major_id = major_tb.major_id
        inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id
       ) where event_tb.event_id = 15 GROUP BY major_tb.major_name ;`
  // faculty
  const sql_faculty = `SELECT count(faculty_tb.faculty_name),faculty_tb.faculty_name
    FROM (answer_tb
       inner join question_tb on answer_tb.question_id = question_tb.question_id
        inner join event_tb on question_tb.event_id = event_tb.event_id
        inner join users_tb on answer_tb.user_id = users_tb.user_id
        inner join major_tb on users_tb.major_id = major_tb.major_id
        inner join faculty_tb on major_tb.faculty_id = faculty_tb.faculty_id
       ) where answer_tb.question_id = 14 GROUP BY faculty_tb.faculty_name ;`

  //  หาจำนวนข้อที่ผู้ใช้ตอบในแต่ละ ระดับความพึ่งพอใจ
  const sql_answer1 = `SELECT count(answer[1]), answer[1]
      FROM answer_tb
          where answer_tb.question_id = 14 GROUP BY answer[1] ;`




  const result = await myData.query(sql);
  console.log(result.rows)
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
  deleteRegEvent,
  getEventListAdmin,
  eventReport,
  answerReport,
  getQuestionById
};
