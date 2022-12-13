import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"




//CREATE
export async function createUser(req, res){  
    
   
    const usuario =req.body;  
    const { contraseña } = usuario 

   const salt = await bcrypt.genSalt(10) //
   const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);   //
   usuario.contraseña = contraseñaEncriptada //

   //creamos documento en la base de datos usuario 
 let documento

 try {
    documento = await userModel.create(usuario)
} catch (error) {
    res.status(400)
    res.json(error.message)
   return;// 
}

    //res.sendStatus(200)  // 
    res.status(201) // 
    res.json(documento) //
}
//READ
//    
export async function readUser(req, res){

    //
    const {email } = req//

    let documento

    try {
        documento = await userModel.findOne({email:email})
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

//update
//
export async function updateUser(req, res){
    const {id} = req.params
    const {cambios} = req.body//

    let documento;

    try {
        documento = await userModel.updateOne({   //
            "_id": id // 
        }, cambios, {runValidators:true})  // 

    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }
   // documento.edad=109 **
    //documento.save()

    res.status(200) 
    res.json(documento)
}

//Delete

export async function deleteUser(req, res){
    const {id} = req.params

    let documento;

    try {
        documento = await userModel.findOneAndDelete({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}