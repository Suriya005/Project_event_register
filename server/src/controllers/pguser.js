const userModels = require("../models/Users/pgUsers");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const result = await userModels.getUsers();
  res.send(result);
};

const getUserOnChange = async (req, res) => {
  const { body } = req;
  const result = await userModels.getUsersOnChange(body);
  res.send(result);
}

const getUserById = async (req, res) => {
  const user = await userModels.getUserById();
  res.send(user);
};

const postUser = async (req, res) => {
  const { body } = req;
  const result = await userModels.createNewUser(body);
  res.send(result);
};

const updateUser = async (req, res) => {
  console.log("contoroller -->", req.body)
  const {body} = req.body;
  const result = await userModels.updateUser(body);
  res.send(result);
};

const postUserLogin = async (req, res) => {
 try {
  const { userId, password } = req.body;
  const userToken = await userModels.loginUser(userId, password);

  const result = { userToken: userToken };
  return result;
 } catch (error) {
   return res.send({errorMessage:'กรุณากรอก ID และ Password ให้ถูกต้อง'});
 }
};

const deleteUser = async (req, res) => {
  const userId = req.body;
  console.log(userId)
  const result = await userModels.deleteUser(userId);
  res.send(result);
};

const verifyToken = async (req, res) => {
  var decoded = jwt.decode(req.body.token)
  console.log(decoded)
  res.send(JSON.stringify(decoded))
}


module.exports = {
  getUsers,
  postUser,
  getUserById,
  postUserLogin,
  updateUser,
  deleteUser,
  verifyToken,
  getUserOnChange
};
