import express from "express"// 
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
const testRouter = express.Router()

testRouter.get("/", async (req, res) => {

    //let documents = await userModel.find({
//"edad" :{$in:[59 ,18,14]}
 //})

  // para validar iun usuario y verificar si e s correcta la contraseña 
  
/* const {usuario,contraseña}= req.body; //
const user = await userModel.findOne({   // buscamos un usuario q coninsida 
"nombre":usuario

})

if(user==null){
    res.sendStatus(401)
    return //


}


const valido =await bcrypt.compare(contraseña, user.contraseña) // 

//res.json(documents) // me envia tosos los objetos del bd

if(valido){
    res.json(valido)
}else{
    res.sendStatus(401)

}
 */


})


export default testRouter