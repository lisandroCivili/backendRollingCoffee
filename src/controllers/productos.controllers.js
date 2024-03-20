import Producto from "../database/models/producto.js"


export const listarProductos = async(req,res)=>{
    try {
        //pedir a la bd lista de todos los productos
        const productos = await Producto.find()//"find" devuelve todos los datos de una coleccion
        //responder al front con array de productos 
        res.status(200).json(productos)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar los productos'
        })
    }
}

export const crearProducto = async(req, res)=>{
    //por respuesta (try o catch) puedo enciar una sola "res"
    try {
        //creo un producto basado en el modelo
        const productoNuevo = new Producto(req.body)
        //le pido a la bd crear el producto
        await productoNuevo.save()//".save" es una querie de mongoose
        //enviar una respuesta cuando puedo crear una respuesta, en este caso 201 
        res.status(201).json({
            mensaje: 'Producto creado con extio'
            //tambien se puede enviar como respuesta el obj. creado
        })
    } catch (error) {
        console.error(error)
        //con res.status mandamos el codigo de respuesta
        //opcional podemos dumar ".json" que agrega al body de respuesta un mensaje de error, NO para el usuario
        res.status(500).json({
            mensaje: 'Error al crear el producto'
        })
    }
}