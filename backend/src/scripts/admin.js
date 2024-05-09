const User = require("../models/user");

const bcrypt = require("bcrypt");

async function createAdminAccount(){
    try{
        const exitingAdmin = await User.findOne({role:"admin"});
        if(!exitingAdmin){
            const newAdmin = new User({
                email:"admin@example.com",
                name:"Admin",
                password:await bcrypt.hash("admin",10),
                role:"admin"
            })
            await newAdmin.save();
            console.log("Admin account created SucessFully")
        } else{
            console.log("Admin already exist")
        }  
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = createAdminAccount;