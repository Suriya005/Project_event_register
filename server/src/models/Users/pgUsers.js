const { myData } = require("../database/conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

// ค้นหาข้อมูล user ทั้งหมด
const getUsers = async () => {
  const sql = `SELECT users_tb.user_id, users_tb.password, users_tb.user_status, users_tb.title_name, users_tb.fname, users_tb.lname, users_tb.sex, users_tb.birthday, major_tb.major_id, major_tb.major_name, faculty_tb.faculty_name
  FROM ((users_tb
  INNER JOIN major_tb ON users_tb.major_id = major_tb.major_id)
  INNER JOIN faculty_tb ON major_tb.faculty_id = faculty_tb.faculty_id) order by users_tb.user_id;`
  const users = await myData.query(sql);
  return users.rows;
};

const getUsersOnChange = async (data) => {
  const sql = `SELECT users_tb.user_id, users_tb.password, users_tb.user_status, users_tb.title_name, users_tb.fname, users_tb.lname, users_tb.sex, users_tb.birthday, major_tb.major_id, major_tb.major_name, faculty_tb.faculty_name
  FROM ((users_tb
  INNER JOIN major_tb ON users_tb.major_id = major_tb.major_id)
  INNER JOIN faculty_tb ON major_tb.faculty_id = faculty_tb.faculty_id) where user_id LIKE '%${data}%' OR fname LIKE '%${data}%' OR lname LIKE '%${data}%' OR major_name LIKE '%${data}%' OR faculty_name LIKE '%${data}%' order by users_tb.user_id;`
  const users = await myData.query(sql);
  return users.rows;
};

// ค้นหา user ตาม ID
const getUserById = async (userId) => {
  const user = await myData.query(
    `SELECT * from users where user_id=${userId}`
  );
  return users.rows;
};

// ฟังก์ชั่นเข้ารหัสสำหรับ password
const generatePassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return (passwordHashed = bcrypt.hash(password, salt));
};

// ฟังก์ชั่นสร้าง user โดยสถานะ default จะเป็น M คือ Member
const createNewUser = async (doc = {}) => {
  const insertDoc = { ...doc };
  insertDoc.password = await generatePassword(doc.password);
  console.log(insertDoc);
  await myData.query(
    `INSERT INTO users_tb(user_id,password,user_status,title_name ,fname,lname ,sex ,birthday ,major_id) VALUES('${insertDoc.userId}', '${insertDoc.password}', 'M','${insertDoc.titleName}', '${insertDoc.fname}', '${insertDoc.lname}', '${insertDoc.sex}', '${insertDoc.birthDay}', '${insertDoc.major}')`
  );
  return { msg: "insert success" };
};

// ฟังก์ชั่นแก้ไข user
const updateUser = async (Doc)=> {
console.log(Doc)
const sql = `UPDATE users_tb SET password='${Doc.password}', fname='${Doc.fname}',lname='${Doc.lname}',sex='${Doc.sex}', birthday='${Doc.birthDay}',title_name='${Doc.titleName}', user_status='${Doc.userStatus}', major_id=${Doc.major} WHERE user_id='${Doc.userId}';`
await myData.query(sql);
return { msg: "update success" };
}

// ฟังก์ชั่นลบ user
const deleteUser = async (userId)=> {
  console.log('ID-->',userId);
  const sql = `DELETE FROM users_tb WHERE user_id='${userId}';`
  await myData.query(sql);
  return { msg: "delete success" };
  }

// ฟังก์ชั่นตรวจสอบ password กับ password ที่เข้ารหัส
comparePassword = async (password, existsPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, existsPassword);
  if (!isPasswordCorrect) {
    throw new Error(`password incorrect`);
  }
  return true;
};

// ฟังก์ชั่น login user
const loginUser = async (userId, password) => {
  const user = await myData.query(
    `SELECT * from users_tb where user_id='${userId}'`
  );
  if (user.rowCount > 1) {
    throw new Error("not find");
  }
  await comparePassword(password, user.rows[0].password);
  // ตรวจสอบสถานผู้ใช้แล้วแจกโทเคนให้ผู้ใช้
    const token = jwt.sign(
      {
        status:user.rows[0].user_status,
      },
      config.secretKey,
      {
        expiresIn: 60 * 3,
      }
    );
    console.log(jwt.decode(token))
    return token;
  
};

module.exports = {
  getUsers,
  createNewUser,
  deleteUser,
  getUserById,
  loginUser,
  updateUser,
  getUsersOnChange
};
