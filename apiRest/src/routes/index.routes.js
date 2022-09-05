const Router = require('express');
const produtoSchema = require('../models/Produto')

const router = Router()

//Liste todos os produtos
router.get('/api/produtos', async (req, res) =>{
  const produtos = await produtoSchema.find()
  try {
    res.status(200).json(produtos)
  } catch (err) {
    res.status(400).end()
  }
})
//liste um produto só
router.get('/api/produtos/:id', async (req, res) => {
  const { id } = req.params
  const produtos = await produtoSchema.findById(id)
  try {
    res.status(200).json(produtos)
  } catch (error) {
    res.status(400).end
  } 
})
//Adicionar um novo produto
router.post('/api/produtos',  (req, res) =>{
  const produto = produtoSchema(req.body)
  produto.save().then((data)=>res.json(data))
  // const produto = Produto(req.body)
  // const produtoSaved = Produto.save()
  // console.log(produtoSaved);
})
//Atualizar um produto

//Eliminar um produto
router.delete('/api/produtos/:id', async (req, res) => {
  const { id } = req.params
  await produtoSchema.findByIdAndDelete(id)
  try {
    res.status(204).end()
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;