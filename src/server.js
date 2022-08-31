const express = require("express");
const server = express();
const signUpFn = require("./auth/routes/signUp");
const signInFn = require("./auth/routes/signIn");
const record = require('../src/middleware/logRecord')
const router = express.Router()
server.use(router)
router.use(record)
// router.use(record)
router.post("/signUp", signUpFn);
router.post("/signIn",record, signInFn);
server.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

// const start = () => {
//   server.listen(PORT, () => console.log(`Running on port ${PORT}`));
// };

module.exports = server
