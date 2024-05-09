const crypto = require("crypto")
// create a random key and saved in the variable  in secretKey using crypto
const secretKey = crypto.randomBytes(32).toString('hex');

module.exports = {
    secretKey:secretKey
}