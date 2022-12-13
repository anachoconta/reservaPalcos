import express from "express"
import mongoose from "mongoose";
import mwPrueba from "./Middlewares/mwPrueba.js";
import testRouter from "./routes/testRouter.js";
import userRouter from "./routes/userRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express()

const port = process.env.PORT || 3000// 

app.listen(port, ()=>{
    console.log("El servidor está ejecutandose correctamente.");
})
// conectamos con BD APPEventos

mongoose.connect("mongodb+srv://grupo7:grupo7@palcoscluster.tkjsd8d.mongodb.net/?retryWrites=true&w=majority",(err) => { // 
    if (err) {
        console.log(err);
    } else {
        console.log("Se ha conectado a la base de datos :v.");
    }
}






)
//  estas son mw 
app.use(express.json())  //
app.use(mwPrueba)
app.use("/user", userRouter) //
app.use("/login", loginRouter)
app.use("/test", testRouter)// router de testeo