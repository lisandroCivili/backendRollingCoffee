import mongoose from "mongoose";
import 'dotenv/config'

const mongoURI = process.env.MONGODB_URI//traigo la vble de entorno
mongoose.connect(mongoURI)//con mongoose nos conectamos
const datosConexion = mongoose.connection//nos brinda datos de la conexion
datosConexion.once('open', ()=>{
    console.log('BD conectada') //si esta conectada ejecuta una func.
})