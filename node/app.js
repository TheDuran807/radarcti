import express from "express"
import cors from 'cors'
import db from './database/db.js'

import registerroutes from './routes/routes.js' //se esta importando el enrutador
import registerrouteshgo from './routes/routeshgo.js'

const app= express()

app.use(cors())
app.use(express.json())
app.use('/nacionals', registerroutes)
app.use('/estatal', registerrouteshgo)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la BD')
} catch (error) {
    console.log('El error es: ${error}')
    
}


// app.get('/', (req, res)=>{
//     res.send('HOLA MUNDO')
// })

app.listen(8000, ()=>{
    console.log('Server up running in http://localhost:8000/')


})