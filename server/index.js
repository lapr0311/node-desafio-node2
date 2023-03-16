const express = require ('express')
const morgan = require ('morgan')
const cors = require ('cors')
const bodyparse = require ('body-parser')
const cancionesRouter= require('./router/canciones.router')

const app = express()
app.use(bodyparse.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cancionesRouter)

app.listen(3000,()=>{console.log('iniciando servidor')})

