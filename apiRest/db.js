const db = require('mongoose')
require('dotenv').config()


db.connect(process.env.MONGODB_URI)
      .then(()=>{
        console.log('Conectado DB');
      }).catch(err =>   {
        console.error(err)
      })
module.exports = db;