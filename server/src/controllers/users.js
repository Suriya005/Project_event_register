const userModels = require('../models/Users/Users')
const getUsers = async(req, res) =>{
    const users = await userModels.getUsers();
    res.send(users);
}
const getUserById = async(req, res) => {
    const {userId} = req.params
    const user = await userModels.getUserId(userId)
    res.send(user);
};
const postUser = async (req, res) => {
    const {body} = req
    const user = await userModels.createNewUser(body);
    res.send(user);
};
const patchUser = async (req, res) => {
    const {
        userId,
        name,
        surname
    } = req.body

    const updatedUser = await userModels.updateuserById(userId, {
        name,
        surname,
    })
    res.send("patch successfully");
};
const deleteUser = async (req, res) => {
    const {userId} = req.body
    const result = await userModels.deleteUserById(userId)
    res.send({msg:"delete successfully", result});
};

const postUserLogin = async (req, res) => {
    const {username, password} = req.body

    const userToken = await userModels.loginUser(username, password)
    // res.send(console.log(userToken));

    return userToken;
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    postUser: postUser,
    patchUser: patchUser,
    deleteUser: deleteUser,
    postUserLogin: postUserLogin,
}