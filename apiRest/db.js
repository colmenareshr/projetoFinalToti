const db = require('mongoose');

(async()=> {

   try {
      await db.connect('mongodb+srv://HcolmDev:senha.123@petshopdb.c0njgva.mongodb.net/?retryWrites=true&w=majority')  
      console.log('DB connected');
   } catch (error) {
      console.error(error)
   }
})()

module.exports = db;