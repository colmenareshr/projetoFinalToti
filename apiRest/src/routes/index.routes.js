const Router = require('express');
const Produto = require('../models/Produto')

const router = Router()

//Liste todos os produtos
router.get('/api/produtos', async (req, res) =>{
  try {
    const produtos = await Produto.find()
    res.status(200).json(produtos)
    console.log(produtos);
  } catch (error) {
    res.status(500).end()
  console.log('Consulta inválida');  
  }
  
})
//liste um produto só
router.get('/api/produtos/:id', async (req, res) => {
  const { id } = req.params
  const produtos =  await Produto.findById(id)
try {
  res.status(200).json(produtos)
} catch (error) {
  console.error(error);
  res.status(400).end()
}
})

//Adicionar um novo produto
router.post('/api/cachorros/brinquedo', async (req, res) =>{
  // const produto = Produto(req.body)
  const produtoSaved = Produto.save()
  console.log(produtoSaved);
})
//Atualizar um produto

//Eliminar um produto
router.delete('/api/cachorros/brinquedos/:id', (req, res) => {
  const id = Number(req.params.id)
  brinquedos = brinquedos.filter(brinquedo => brinquedo.id !== id)
  res.status(204).end()

})

module.exports = router;