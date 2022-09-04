const Router = require('express');

const router = Router()

//Liste todos os produtos
router.get('/api/cachorros/brinquedos', (req, res) =>{
  try {
    if (brinquedos) {
      res.status(200).json(brinquedos)
      
    } else {
      res.status(404).end()
    }
  } catch (error) {
  console.log('Consulta inválida');  
  }
  
})

//liste um produto só
router.get('/api/cachorros/brinquedos/:id', (req, res) => {
  const id = Number(req.params.id)
  const brinquedo = brinquedos.find(brinquedo => brinquedo.id === id)
  try {
    if (brinquedo) {
      res.status(200).json(brinquedo)
    }else{
      res.status(404).end()
    }
  } catch (error) {
    console.log(error);
  }

})

//Adicionar um novo produto

//Atualizar um produto

//Eliminar um produto
router.delete('/api/cachorros/brinquedos/:id', (req, res) => {
  const id = Number(req.params.id)
  brinquedos = brinquedos.filter(brinquedo => brinquedo.id !== id)
  res.status(204).end()

})

module.exports = router;