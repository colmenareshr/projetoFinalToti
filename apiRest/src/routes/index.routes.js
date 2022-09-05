const Router = require('express');
const produtoSchema = require('../models/Produto')

const router = Router()

//Liste todos os produtos
router.get('/api/produtos', (req, res) =>{
  produtoSchema
  .find()
  .then((dados) =>res.status(200).json(dados))
  .catch((err)=>res.status(404).end())
})
//liste um produto só
router.get('/api/produtos/:id', (req, res) => {
  const { id } = req.params
  produtoSchema
  .findById(id)
  .then((dados)=>res.status(200).json(dados))
  .catch((error)=>res.status(404))
})
//Adicionar um novo produto
router.post('/api/produtos',  (req, res) =>{
  const produto = produtoSchema(req.body)
  produto
  .save()
  .then((data)=>res.json(data))
  .catch((err)=>res.status(400).end())
})

//Atualizar um produto

//Eliminar um produto
router.delete('/api/produtos/:id', (req, res) => {
  const { id } = req.params
  produtoSchema
  .findByIdAndDelete({ _id: id})
  .then((dados)=>res.status(204).json(dados).end())
  .catch((err)=>res.status(400).json({message: err}))
})

module.exports = router;