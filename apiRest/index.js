const app = require('./src/app.js')
const db = require('./db')

const PORT = 3000
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
})



