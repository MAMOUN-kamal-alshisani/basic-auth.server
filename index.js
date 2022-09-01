const server= require('./src/server')
const {sql} = require('./src/modules/sql')
require('dotenv').config()
// require('dotenv').config
const PORT = process.env.PORT || 3000



sql.sync().then(()=>{
    server.listen(PORT,()=> console.log(`Running on port ${PORT}`))
}).catch(err => console.log(err))