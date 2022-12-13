import mongoose from "mongoose";
import genKey from "../utils/keyGenerator.js";


const profileSchema = new mongoose.Schema({
    "mensaje": String,
    "estado": String
})
const ciudades = ["Barranquilla", "Bogotá", "Medellin", "Cali", "Bucaramanga"]

function validacionPar(v){
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//
//
//

const userSchema = new mongoose.Schema({
    "id": { type: String, default: () => genKey(10), set: () => genKey(10), immutable: true }, //
    "nombre": {type:String, required:true,  maxlength: 30, minlength: 3},// 
    "apellido": {type:String, required:true,  maxlength: 30, minlength: 3},
   "email": {type:String, required:true,  maxlength: 30, minlength: 3},
   "telefono": {type:Number},
    "contraseña": { type: String, required: true },  
    "edad": {
        type: Number, 
        min: 18,  
        max: 100, 
        required:true,
        // validate:{   //
        //     validator: validacionPar,
        //     // message: props => `${props.value} tiene que ser un numero par`// estod se llama temple string concatena variables
        //     message: "El numero tiene que ser par" 
        // }
    },
    "ciudad": { type: String, required:true, enum: ciudades }, // 
    "date": Date,
    "activo": Boolean,
    // "perfil": profileSchema //
},{ timestamps: true })
// 
export default mongoose.model("users",userSchema)