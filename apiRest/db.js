const db = require('mongoose')

db.connect('mongodb+srv://HcolmDev:senha.123@petshopdb.c0njgva.mongodb.net/?retryWrites=true&w=majority')
      .then(()=>{
        console.log('Conectado DB');
      }).catch(err =>   {
        console.error(err)
      })
module.exports = db;