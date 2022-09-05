const Router = require('express');
const Produto = require('../models/Produto')

const router = Router()

//Liste todos os produtos
router.get('/api/produtos', async (req, res) =>{
  const produtos = await Produto.find()
  try {
    res.status(200).json(produtos)
  } catch (err) {
    res.status(400).end()
  }
})
//liste um produto só
router.get('/api/produtos/:id', async (req, res) => {
  const { id } = req.params
  const produtos = await Produto.findById(id)
  try {
    res.status(200).json(produtos)
  } catch (error) {
    res.status(400).end
  } 
})
//Adicionar um novo produto
router.post('/api/cachorros/brinquedo', (req, res) =>{
  const produto = Produto(req.body)
  const produtoSaved = Produto.save()
  console.log(produtoSaved);
})
//Atualizar um produto

//Eliminar um produto
router.delete('/api/produtos/:id', async (req, res) => {
  const { id } = req.params
  await Produto.findByIdAndDelete(id)
  try {
    res.status(204).end()
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;