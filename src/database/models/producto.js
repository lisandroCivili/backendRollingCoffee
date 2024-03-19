import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 25,
        unique: true
    },
    precio:{
        type: Number,
        required: true,
        min: 300,
        max: 5000
    },
    imagen:{
        type: String,
        required: true,
        validate:{
            validator: (dato)=>{
                const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/
                return pattern.test(dato)
            }
        }
    },
    categoria:{
        type: String,
        required: true,
        enum: ['Batidos', 'dulce', 'Infusiones']
    },
    descripcion_breve:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 50
    },
    descripcion_amplia:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 250
    }
})

//con esto creo la coleccion (representacion de los datos de la bd)
const Producto = mongoose.model('producto', productoSchema)
export default Producto