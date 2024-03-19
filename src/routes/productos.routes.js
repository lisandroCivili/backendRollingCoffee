import { Router } from "express";
import { crearProducto, listarProductos } from '../controllers/productos.controllers.js' //tiene q llevar la extension


// app.get('/nuevo/producto', (req,res)=>{
//     console.log('Aqui obtengo la lista de todos los productos')
//     res.send('aqui enviaremos la lista de productos')
// })
// se resume lo anterior

const router = Router()// instanciamos para desde aqui poder crear rutas
//defino la ruta. Dentro de get se podria poner la funcion para obtener los datos, pero es mejor hacerlo en otro archivo
router.route('/productos').get(listarProductos).post(crearProducto)//para la misma ruta tenemos dos metodos (nunca iguales), depediendo cual clickee el usuario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

export default router
 
