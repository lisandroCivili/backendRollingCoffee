// archivo principal de NODE
import express from 'express'
//permite procesar vbles de entorno
import 'dotenv/config' //siempre que pongamos entre comillas, busca en node_modules
import cors from 'cors';
import morgan from 'morgan'




//1- configuracion de puerto
const app = express()
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})
//2- configuracion middlewares
app.use(cors())//permite conexiones remotas
app.use(morgan('dev'))//brinda info extra en la terminal 
app.use(express.json())//ayuda a interpretar datos en formato json
app.use(express.urlencoded({extended:true}))//ayuda a interpretar los datos del body del req

//3- configuracion de rutas
app.get('/nuevo/producto', (req,res)=>{
    console.log('Aqui obtengo la lista de todos los productos')
    res.send('aqui enviaremos la lista de productos')
})