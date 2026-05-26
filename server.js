require('dotenv').config()
const express = require('express');
const cors = require('cors');
const pessoaRoutes = require('./src/routes/pessoaRoutes');
const produtoRoutes = require('./src/routes/produtosRoutes');
const jogadorRoutes = require('./src/routes/jogadorRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(pessoaRoutes)
app.use(produtoRoutes)
app.use(jogadorRoutes)

const PORT = process.env.PORT

app.listen(PORT,()=> console.log(`http://localhost:${PORT}`))