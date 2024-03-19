// archivo principal de NODE
import express from 'express'
//permite procesar vbles de entorno
import 'dotenv/config' //siempre que pongamos entre comillas, busca en node_modules
import cors from 'cors';
import morgan from 'morgan'
import productosRouter from './src/routes/productos.routes.js';
import path from 'path'
import { fileURLToPath } from 'url';
import './src/database/database.js'



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
//confgurar index.html
const __filename= fileURLToPath(import.meta.url)//todo el path del index.html
const __dirname = path.dirname(__filename)//con este obtenemos solo el directorio del proyecto
//con "static" generamos una pagina estaitca para mostrar en la ubicacion que creamos con "path.join" que sirve para unir paths
app.use(express.static(path.join(__dirname, '/public')))

//3- configuracion de rutas
app.use('/api', productosRouter)