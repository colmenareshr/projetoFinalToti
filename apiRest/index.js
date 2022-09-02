const express = require('express')
const app= express()

let brinquedos = [
{
  'id': 1,
  'nome': 'oso pra moder',
  'descripcao': 'Briquedo de plastico para moder',
  'valor': 35,
  'categoria': 'Brinquedos'
  },
  {
  'id': 2,
  'nome': 'Nina Brinquedo Interativo para Cães  ',
  'descripcao': 'Jogo para encher com o kibble ou guloseima favorita de seu cão.',
  'valor': 24,
  'categoria': 'Interativos'
  }
]
  



//Liste todos os produtos
app.get('/api/cachorros/brinquedos', (req, res) =>{
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

app.get('/api/cachorros/brinquedos/:id', (req, res) => {
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

app.delete('/api/cachorros/brinquedos/:id', (req, res) => {
  const id = Number(req.params.id)
  brinquedos = brinquedos.filter(brinquedo => brinquedo.id !== id)
  res.status(204).end()

})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
})