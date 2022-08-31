/// hashing function 
const bcrypt = require("bcrypt");
/// used for encoding and decoding strings
const base64 = require("base-64");
const { USERS } = require("../../modules/sql");

async function signInFn(req,res){
 /* let AuthHeader = req.headers.authorization;
 Requesting authorization header which is basic authentication header : username:password that are encoded
the requested header looks like this : (Basic bWFtb3VuOjEyMzQ1),
1. now the word 'Basic' keyword is Authorization type and is added by default with a space by the end of it.
2.the second part 'bWFtb3VuOjEyMzQ1' are the encoded Creditentials of : username:password
*/
const authHeader = req.headers.authorization
  /// in the second part below the authorization header is split and then taken apart
  ///  and the poped value is a value encoded with base-64 would be :(bWFtb3VuOjEyMzQ1)
const encodedCreditentials = authHeader.split(' ').pop()
 /* in the part below the value which has been taken is transformed (decoded) back to its 
original form : username:password */
const decodedCreditentials = base64.decode(encodedCreditentials)
 /* and in the forth part below the basic Auth header (username:password)
is split from the colon ':'
*/
const [userName,Password] = decodedCreditentials.split(':')

try{
//// searching the database for the username that matches the one requested
    const User = await USERS.findOne({where:{userName}})
    //// hashing the password and comparing it with the hashed password in the database
    const Valid = await bcrypt.compare(Password,User.Password)

    if(Valid){
        res.status(200).json(User)
    }else{

        res.status(401).json(error,'invalid login password')
    }
   
}catch(err){console.log(err)}
}

module.exports = signInFn