const Users = require('./schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config')

const generatePassword = async (password) => {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    return passwordHashed = bcrypt.hash(password, salt)

}


const createNewUser = async (doc = {}) =>{
    const insertDoc = {...doc}

    insertDoc.password = await generatePassword(doc.password);

    const newUser = new Users(insertDoc)

    return await newUser.save()
}

const getUsers = async (query = {}) => {
    const users = await Users.find().lean();
    return users
}

const getUserId = async (userId) => {
    const user = await Users.findById(userId)
    return user
}
const updateuserById = async (userId, doc) =>{
    const updatedUser = await Users.updateOne({
        _id: userId,
    }, doc, {
        returnOriginal : false
    })
    return updatedUser
}

const deleteUserById = async (userId) =>{
    const deleted = await Users.remove({
        _id: userId,
    })
    return deleted
}

comparePassword = async (password, existsPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, existsPassword);
  if (!isPasswordCorrect) {
    throw new Error(`password incorrect`);
  }
  return true;
};

const loginUser = async (username, password) =>{
        const user = await Users.findOne({ 
            username
        })

        if (!user){
            throw new Error('not find')
        }

        await comparePassword(password, user.password)

        const token = jwt.sign(
          {
            id: user._id,
          },
          config.secretKey,
          {
            expiresIn: 60,
          }
        );
        return token;
}

module.exports = {
  createNewUser: createNewUser,
  getUsers: getUsers,
  getUserId: getUserId,
  updateuserById: updateuserById,
  deleteUserById: deleteUserById,
  loginUser: loginUser,
};