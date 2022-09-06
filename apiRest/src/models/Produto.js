const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const produtoSchema= new Schema({
   categoria:{
      type: String,
      required: true,
      trim: true
   },
   titulo:{
      type: String,
      required: true,
      unique: true,
      trim: true
   },
   descripcao:{
      type:String,
      required: true,
   }, 
   valor:{
      type: Number,
      required: true
      
   }
   // url_image:{
   //    type: String,
   //    required: true,
   // }
   
}, {
   versionKey: false
})

const Produto = model('Produto', produtoSchema)
module.exports= Produto;

// const produto = new Produto({
//    categoria: 'Racoes',
//    titulo:'Racoes Alpo 12 Kg',
//    descripcao:'Nutricao para seu cachorros',
//    valor: 120
// })

// produto.save()
//    .then(result =>{
//       console.log(result);
//       mongoose.connection.close()
//    })
//    .catch(err=>{
//       console.error(err);
//    })
   