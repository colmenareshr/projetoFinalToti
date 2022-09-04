const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const produtoSchema= new Schema({
   categoria:{
      type: String,
      require: true,
      trim: true
   },
   titulo:{
      type: String,
      require: true,
      unique: true,
      trim: true
   },
   descripcao:{
      type:String,
      require: true,
   }, 
   valor:{
      type: Number,
      require: true
      
   } 
   
}, {
   timestamps: true,
   versionKey: false
})

const Produto = model('Produto', produtoSchema)

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
   
module.exports= Produto;