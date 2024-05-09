const userService = require("../services/signup");

async function createUser (req,res){
    try{
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({user:user,message:"the user created sucessfully"});
    }catch(error){
        console.log(error);
        res.status(400).json({message:error.message})
    }
}
module.exports = {createUser}
 