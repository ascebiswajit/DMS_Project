const User = require("../models/user");
const bcrypt = require("bcrypt");
/*
- pass the user module;
- require the bcrypt for hash the password
- create async funcion for bcrypt the password and create user and save the data
- pass the createUser module
*/
async function createUser(userData) {
  const { name, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = new User({
    name,
    email,
    password:hashedPassword,
    role: "customer",
  });

  const savedUser = await createdUser.save();
  return savedUser;
}
module.exports = { createUser };
